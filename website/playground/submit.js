function createSubmitData() {
    // [[d1,d2,...,d10], [d11,...,d20], ..., [d51,d52]]
    let collected_data = [];

    for (let i = 0; i < presented_user_number; i = i + 10) {
        let batch = [];
        for (let j = i; j < i + 10; j++) {
            if (j < presented_user_number) {
                batch.push( 
                    { "fields" : {
                        "twitterUserName": tweet_user_names[j],
                        "twitterUserID": tweet_user_ids[j],
                        "Choice": participantInput[j],
                        "participantID": participantID
                        }   
                    }
                );
            }
        }
        collected_data.push(batch);
    }

    return collected_data;
}


async function insert(target_table, data) {
    try {
        for (let i = 0; i < data.length; i++) {
            await target_table.create(data[i]);
        }
    } catch (e) {
        console.log("error");
        //goToErrorPage();
        return;
    }

}

function goToThanksPage() {
    document.location.href = "thanks.html";
}

async function submitData() {
    let collected_data = createSubmitData();
    await insert(table_collectedData, collected_data);
    console.log("submitting completed");
    //goToThanksPage();
}