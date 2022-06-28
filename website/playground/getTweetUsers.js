async function getLeastVisitedUser(userNum) {
    const records = await table_tweetUsers.select({maxRecords: userNum, view: "Grid view"}).firstPage();

    records.forEach(function(record) {
        tweet_user_names.push(record.get('Name'));
        tweet_user_ids.push(record.get('userID'));
    })

    console.log("getting tweet users", tweet_user_names, tweet_user_ids);
    
    getTweetsOfTheUser(tweet_user_names[0]);
}

getLeastVisitedUser(presented_user_number);