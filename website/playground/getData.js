
// connecting to database

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table_tweets = base('user1');
const table_result = base('result');


// getting tweets and presenting on the webpage

const totalTweets = 17;
var randomRow = [...Array(totalTweets + 1).keys()];
randomRow.shift();
// console.log(randomRow);

function shuffle(o) {
    // source: https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

randomRow = shuffle(randomRow);

function buildFormula(presented_number) {
    var formula = "OR("
    for (let i = 0; i < presented_number; i++) {
        if (i != presented_number - 1) {
            formula = formula + "{rowNum} = " + randomRow[i].toString() + ","
        } else {
            formula = formula + "{rowNum} = " + randomRow[i].toString() + ")"
        }
        console.log(formula);
    }

    return formula;
}

const formula = buildFormula(presented_number);


const retrieved_records_id = [];

const getRecords = async (presented_number) => {
    var records = await table_tweets.select({filterByFormula: formula}).firstPage();
    // try {
    //     var records = await table_tweets.select({view: "Grid view"}).eachPage();
    // } catch {
    //     goToErrorPage();
    //     return;
    // }

    let retrieved_records_content = [];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('rowNum'));
        console.log("retrieved record id", record.getId());
        retrieved_records_id.push(record.getId());
        retrieved_records_content.push(record.get('content'));
    })

    for (let i = 0; i < presented_number; i++) {
        console.log("rendering innerHTML", retrieved_records_content[i]);
        document.getElementById((i+1).toString() + "Tweet").innerHTML += retrieved_records_content[i]; // div id starting at 1, not 0
    }
};

getRecords(presented_number);