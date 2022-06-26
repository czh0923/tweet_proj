// connecting to database

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

const table_tweets = base('user1');
const table_result = base('result');



// constants 
const presented_number = 10;
const buttonNames = ["D", "R", "I", "O"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other"];
const tweetDiv = document.getElementById("tweetDiv");
const choiceButtonDiv = document.getElementById("choiceButtonDiv");
const finalButtonDiv = document.getElementById("finalButtonDiv");
console.log(tweetDiv, choiceButtonDiv, finalButtonDiv);

const presented_user_number = 20;
const totalTweeterUsers = 154;

// pending https://community.airtable.com/t/how-could-i-find-out-how-many-records-there-are-in-a-table/28008
