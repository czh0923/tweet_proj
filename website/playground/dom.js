

function createMainPage(tweetDiv, choiceButtonDiv) {
    progressBarInner.style.width = (curPageNum / presented_user_number * 100).toString() + "%";

    for (let i = 0; i < presented_number; i++) {
        // console.log("building div");
        createTweetContentParagraph(tweetDiv, i + 1);
    }

    createFourButtons(choiceButtonDiv);
}


function createTweetContentParagraph(tweetDiv, i) {

    // <p id="iTweet">i. </p>
    // <div id="iAttachmentDiv">

    let p = document.createElement("p");
    // p.innerHTML = i.toString() + ". ";
    p.id = i.toString() + "Tweet";
    tweetDiv.appendChild(p);

    let attachmentDiv = document.createElement("div");
    attachmentDiv.id = i.toString() + "AttachmentDiv";
    tweetDiv.appendChild(attachmentDiv);

    let hr = document.createElement("hr");
    tweetDiv.appendChild(hr);
}

function createFourButtons(choiceButtonDiv) {
    // <div id="choiceButtonDiv">
    //    <div class="single_button_div">
    //         <input></input>
    //         <label><description/></label>
    //    </div> * 4
    // </div>

    for (let j = 0; j < buttonNames.length; j++) {
        createButton(choiceButtonDiv, buttonNames[j], "Choices", buttonValues[j], "radio");
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

function createFinalButton(finalButtonDiv) {

    // <button id='finalButton'> Next </button> 

    let finalButton = document.createElement("button");
    finalButton.innerHTML = "Next";
    finalButton.id = "finalButton";

    finalButtonDiv.appendChild(finalButton);
}
 
createMainPage(tweetDiv, choiceButtonDiv);

