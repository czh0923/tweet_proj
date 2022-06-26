

function createMainPage(pageNum, tweetDiv, choiceButtonDiv, finalButtonDiv) {
    for (let i = 0; i < presented_number; i++) {
        console.log("building div");
        createTweetContentParagraph(tweetDiv, i + 1);
    }

    createFourButtons(choiceButtonDiv, pageNum);

    if (pageNum == presented_user_number) {
        createSubmitButton(finalButtonDiv);
    } else {
        createNextButton(finalButtonDiv, pageNum);
    }
}


function createTweetContentParagraph(tweetDiv, i) {

    // <p id="iTweet">i. </p>
    // <div id="iAttachmentDiv">

    let p = document.createElement("p");
    p.innerHTML = i.toString() + ". ";
    p.id = i.toString() + "Tweet";
    tweetDiv.appendChild(p);

    let attachmentDiv = document.createElement("div");
    attachmentDiv.id = i.toString() + "AttachmentDiv";
    tweetDiv.appendChild(attachmentDiv);

    let hr = document.createElement("hr");
    tweetDiv.appendChild(hr);
}

function createFourButtons(choiceButtonDiv, i) {
    // <div id="choiceButtonDiv">
    //    <div class="single_button_div">
    //         <input></input>
    //         <label><description/></label>
    //    </div> * 4
    // </div>

    for (let j = 0; j < buttonNames.length; j++) {
        createButton(choiceButtonDiv, i.toString() + buttonNames[j], "Choices" + i.toString(), buttonValues[j], "radio");
    }

}


function createButton(div, id, name, value, type) {

    // <div class="single_button_div">
    //     <input></input>
    //     <label><description/></label>
    // </div>

    let button_div = document.createElement("div");
    button_div.className = "single_button_div";

    let button1 = document.createElement("input");
    button1.type = type;
    button1.name = name;
    button1.value = value;
    button1.id = id;

    let label1 = document.createElement("label");
    label1.htmlFor = id;

    let description1 = document.createTextNode(value);
    label1.appendChild(description1);

    button_div.appendChild(button1);
    button_div.appendChild(label1);

    div.appendChild(button_div);
}

function createNextButton(finalButtonDiv, pageNum) {

    // <button id='submitButton'> Submit </button> 

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.id = pageNum.toString() + "nextButton";

    finalButtonDiv.appendChild(nextButton);

    nextButton.addEventListener("click", pressNext);

}

function createSubmitButton(finalButtonDiv) {

    // <button id='submitButton'> Submit </button> 

    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "submitButton";

    finalButtonDiv.appendChild(submitButton);

}
 
createMainPage(1, tweetDiv, choiceButtonDiv, finalButtonDiv);

