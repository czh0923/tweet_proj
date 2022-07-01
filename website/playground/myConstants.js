// connecting to database

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('appQM4HHXqwvglt66');
const base_result = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('appJjZIZ2XbDCD5Gm');

const table_tweetUsers = base('tweet_user');
const table_collectedData = base_result('collected_data');


// constants 
const presented_number = 10;
const buttonNames = ["D", "R", "I", "O"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other"];

// html elements
const progressBarInner = document.getElementById("progressBarInner");
const tweetDiv = document.getElementById("tweetDiv");
const choiceButtonDiv = document.getElementById("choiceButtonDiv");
const finalButtonDiv = document.getElementById("finalButtonDiv");
const finalButton = document.getElementById("finalButton");


const presented_user_number = 5;
//const totalTweeterUsers = 154;
var tweet_user_names = [];
var tweet_user_ids = [];
var tweet_user_recordIDs = [];
var tweet_user_prevVisitedTimes = [];
const userNames_and_numOfTweets = {
    "user1":17, "user2":120, "user3":134, "user4":128, "user5":93, "user6":225, "user7":213, "user8":39, "user9":33, "user10":35
}

var curPageNum = 1;

var participantInput = []

const participantID = localStorage.getItem("participantID");


// helper functions
function goToThanksPage() {
    document.location.href = "thanks.html";
}

function goToErrorPage(e) {
    document.location.href = "error.html";
    console.log(e);
}