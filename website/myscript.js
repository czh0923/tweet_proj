
// connecting to database

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table_tweets = base('ex_tweets');
const table_result = base('result');


// getting tweets and presenting on the webpage

const getRecords = async () => {
    const records = await table_tweets.select({maxRecords: 3, view: "Grid view"}).firstPage();

    let retrieved_records_content = [];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        console.log("retrieved record id", record.getId());
        // console.log('Retrieved', record.get('content'));

        retrieved_records_content.push(record.get('content'));
    })

    let firstTweet = retrieved_records_content[0];
    let secondTweet = retrieved_records_content[1];
    let thirdTweet = retrieved_records_content[2];

    document.getElementById("1st").innerHTML += firstTweet;
    document.getElementById("2nd").innerHTML += secondTweet;
    document.getElementById("3rd").innerHTML += thirdTweet;
};

getRecords();

// console.log("contents!", retrieved_records_content);

// let firstTweet = retrieved_records_content[0];
// console.log("first tweet", firstTweet);
// console.log("what?", retrieved_records_content[0]);
// let secondTweet = retrieved_records_content[1];
// let thirdTweet = retrieved_records_content[2];

// document.getElementById("1st").innerHTML = firstTweet;
// document.getElementById("2nd").innerHTML = secondTweet;
// document.getElementById("3rd").innerHTML = thirdTweet;




// inserting records

data1 = {
    "Name": "czh",
    "content": "hello!\n",
    "visited": 20
    
};

function f_create(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    })
};

function insert() {
    console.log("here");
    table_tweets.create(data1, f_create);
}
document.getElementById("submitButton").addEventListener("click", insert);