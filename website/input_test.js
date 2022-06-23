
// connecting to database

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

console.log("here");

const table_tweets = base('ex_tweets');
const table_result = base('result');


// getting tweets and presenting on the webpage

const retrieved_records_id = []

const getRecords = async () => {
    const records = await table_tweets.select({maxRecords: 3, view: "Grid view"}).firstPage();

    let retrieved_records_content = [];
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        console.log("retrieved record id", record.getId());
        // console.log('Retrieved', record.get('content'));
        retrieved_records_id.push(record.getId());
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



// getting chosen values and inserting into database (table_result)

function getValueAndInsert() {
    let value1 = document.querySelector('input[name=Choices1]:checked').value;
    let value2 = document.querySelector('input[name=Choices2]:checked').value;
    let value3 = document.querySelector('input[name=Choices3]:checked').value;


    console.log(retrieved_records_id);
    console.log(value1, value2, value3);


    collected_data = [
        { "fields" : {
            "ID": retrieved_records_id[0],
            "Choice": value1
            }   
        },
        { "fields" : {
            "ID": retrieved_records_id[1],
            "Choice": value2
            } 

        },
        { "fields" : {
            "ID": retrieved_records_id[2],
            "Choice": value3
            } 

        }
    ]

    insert(table_result, collected_data);

}

function insert(target_table, data) {
    target_table.create(data, function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
    });

}


document.getElementById("submitButton").addEventListener("click", getValueAndInsert);