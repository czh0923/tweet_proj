// connecting to database

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyQUcYkOoAkjWXTV'}).base('app0HYDUVfrBVLFV2');

const table_collectedData = base('collected_data');
const table_tweetUsers = base('tweet_user');


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


const presented_user_number = 11;
const totalTweeterUsers = 154;
var tweet_user_names = [];
var tweet_user_ids = [];
var tweet_user_recordIDs = [];
var tweet_user_prevVisitedTimes = [];
const userNames_and_numOfTweets = {
    "user1":17, "user2":120, "user3":134, "user4":128, "user5":93, "user6":225, "user7":213, "user8":95, "user9":70, "user10":59
}

var curPageNum = 1;

var participantInput = []

var participantID = "dummy";

