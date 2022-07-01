// helper functions 

function shuffle(o) {
    // source: https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function randomRowNumberGenerator(target_table_size) {
    let randomRow = [...Array(target_table_size + 1).keys()];
    randomRow.shift();
    randomRow = shuffle(randomRow);
    return randomRow;
}

function buildFormula(presented_number, randomRowNum) {
    var formula = "OR("
    for (let i = 0; i < presented_number; i++) {
        if (i != presented_number - 1) {
            formula = formula + "{rowNum} = " + randomRowNum[i].toString() + ","
        } else {
            formula = formula + "{rowNum} = " + randomRowNum[i].toString() + ")"
        }
        // console.log(formula);
    }

    return formula;
}

function renderPic(retrieved_records_url) {
    for (let i = 0; i < presented_number; i++) {

        if (retrieved_records_url[i] != undefined) {
            let aD = document.getElementById((i+1).toString() + "AttachmentDiv");

            let img = document.createElement("img");
            img.id = (i+1).toString() + "pic";
            img.alt = "No Pic Attachments";
            aD.appendChild(img);

            let thisUrl = retrieved_records_url[i][0].url;
            console.log("rendering pic", thisUrl);
            img.src = thisUrl.toString();
        }
    }
}

function renderWords(retrieved_records_content) {
    for (let i = 0; i < presented_number; i++) {
        // console.log("rendering innerHTML", retrieved_records_content[i]);
        document.getElementById((i+1).toString() + "Tweet").innerHTML = (i+1).toString() + ". " + retrieved_records_content[i]; // div id starting at 1, not 0
    }
}

function getTableSize(tableName) {
    return userNames_and_numOfTweets[tableName];
}



// getting tweets and presenting on the webpage

async function getTweetsOfTheUser(userName) {
    let target_table = base(userName);
    let target_table_size = getTableSize(userName);
    let randomRowNumberArray = randomRowNumberGenerator(target_table_size);
    let formula = buildFormula(presented_number, randomRowNumberArray);

    let retrieved_records_id = [];
    let retrieved_records_content = [];

    try {
        var records = await target_table.select({filterByFormula: formula}).firstPage();
    } catch (e) {
        goToErrorPage(e);
        return;
    }

    // let records = await target_table.select({filterByFormula: formula}).firstPage();
    records.forEach(function(record) {
        console.log('Retrieved', record.get('rowNum'), record.get('Name'));
        retrieved_records_id.push(record.getId());
        retrieved_records_content.push(record.get('content'));
    })

    // rendering words
    renderWords(retrieved_records_content);
}
