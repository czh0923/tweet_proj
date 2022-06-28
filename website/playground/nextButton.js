finalButton.addEventListener("click", pressNext);

function getParticipantInput() {
    let buttonSelected = document.querySelector("input[name='Choices']:checked");
    if (buttonSelected == null) {
        alert("Must select one");
    } 
    participantInput.push(buttonSelected.value);
    console.log(participantInput);
}

function progressBarChange(curPageNum) {
    console.log(curPageNum / presented_user_number * 100);
    progressBarInner.style.width = (curPageNum / presented_user_number * 100).toString() + "%";
}

function clearChoiceButton() {
    for (let i = 0; i < buttonNames.length; i++) {
        let button = document.getElementById(buttonNames[i]);
        button.checked = false;
    }
}


function reloadPage() {
    window.location.reload();
}

async function pressNext() {

    getParticipantInput();

    if (curPageNum == presented_user_number - 1) {
        finalButton.innerHTML = "Submit";
    } else if (curPageNum == presented_user_number) {
        await submitData();
        return;
    } 

    curPageNum += 1;
    getTweetsOfTheUser(tweet_user_names[curPageNum - 1]);
    clearChoiceButton();
    progressBarChange(curPageNum);

}