
function f() {
    console.log("I got clicked");
}

const firstTweet = "1. the first tweet";
const secondTweet = "2. the second tweet";

document.getElementById("1st").innerHTML = firstTweet;
document.getElementById("2nd").innerHTML = secondTweet;
document.getElementById("submitButton").addEventListener("click", f);