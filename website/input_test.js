
// connecting to database

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table_tweets = base('ex_tweets');
const table_result = base('result');


// getting tweets and presenting on the webpage

const presented_num = 3;
const choice_list = ["Choices1", "Choices2", "Choices3"];


const retrieved_records_id = [];
const retrieved_records_visited = [];

const getRecords = async () => {
    try {
        var records = await table_tweets.select({maxRecords: presented_num, view: "Grid view"}).firstPage();
    } catch {
        goToErrorPage();
        return;
    }

    let retrieved_records_content = [];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        console.log("retrieved record id", record.getId());
        retrieved_records_id.push(record.getId());
        retrieved_records_content.push(record.get('content'));
        retrieved_records_visited.push(record.get('visited'));
    })

    for (let i = 0; i < presented_num; i++) {
        document.getElementById((i+1).toString() + "Tweet").innerHTML += retrieved_records_content[i]; // div id starting at 1, not 0
    }
};

getRecords();



// getting chosen values and inserting into database (table_result)

async function userSubmit() {

    // getting chosen values
    let value_list = [];

    for (let i = 0; i < presented_num; i++) {
        value_list.push(document.querySelector('input[name=' + CSS.escape(choice_list[i]) + ']:checked').value);
    }

    let collected_data = [];

    for (let i = 0; i < presented_num; i++) {
        collected_data.push( 
            { "fields" : {
                "ID": retrieved_records_id[i],
                "Choice": value_list[i]
                }   
            }
        );
    }

    console.log("here", collected_data);

    // inserting into result db
    await insert(table_result, collected_data);

    // updating times visited in tweets db
    await updateVisited(table_tweets);

    // go to thanks page
    goToThanksPage();

}

async function insert(target_table, data) {
    try {
        await target_table.create(data);
    } catch {
        goToErrorPage();
        return;
    }

}

async function updateVisited(target_table) {
    console.log(retrieved_records_visited);
    for (let i = 0; i < retrieved_records_id.length; i++) {
        await target_table.update([{
            "id": retrieved_records_id[i],
            "fields": {
              "visited": retrieved_records_visited[i] + 1
            }
        }]);
    }
}

function goToThanksPage() {
    document.location.href = "thanks.html";
}

function goToErrorPage() {
    document.location.href = "error.html";
}


document.getElementById("submitButton").addEventListener("click", userSubmit);
