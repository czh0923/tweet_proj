
// connecting to database

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table_tweets = base('user1');
const table_result = base('result');


// getting tweets and presenting on the webpage
const totalTweets = 17;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var formula = "OR("
for (let i = 0; i < presented_number + 3; i++) {
    if (i != presented_number + 3 - 1) {
        formula = formula + "{rowNum} = " + getRandomInt(0, totalTweets).toString() + ","
    } else {
        formula = formula + "{rowNum} = " + getRandomInt(0, totalTweets).toString() + ")"
    }
    console.log(formula);
}


const retrieved_records_id = [];

const getRecords = async () => {
    var records = await table_tweets.select({filterByFormula: formula}).firstPage();
    // try {
    //     var records = await table_tweets.select({view: "Grid view"}).eachPage();
    // } catch {
    //     goToErrorPage();
    //     return;
    // }

    let retrieved_records_content = [];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        console.log("retrieved record id", record.getId());
        retrieved_records_id.push(record.getId());
        retrieved_records_content.push(record.get('content'));
    })

    for (let i = 0; i < presented_number; i++) {
        console.log("rendering innerHTML", retrieved_records_content[i]);
        document.getElementById((i+1).toString() + "Tweet").innerHTML += retrieved_records_content[i]; // div id starting at 1, not 0
    }
};

getRecords();