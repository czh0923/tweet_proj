async function getLeastVisitedUser(userNum) {
    const records = await table_tweetUsers.select({maxRecords: userNum, view: "Grid view"}).firstPage();

    records.forEach(function(record) {
        tweet_user_recordIDs.push(record.getId());
        tweet_user_names.push(record.get('Name'));
        tweet_user_ids.push(record.get('userID'));
        tweet_user_prevVisitedTimes.push(record.get('ratedTimes'));
    })

    console.log("getting tweet users", tweet_user_recordIDs, tweet_user_names, tweet_user_ids, tweet_user_prevVisitedTimes);
    
    getTweetsOfTheUser(tweet_user_names[0]);
}

getLeastVisitedUser(presented_user_number);