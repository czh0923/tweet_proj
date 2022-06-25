
{/* <input type="radio" name="Choices1" id="1D" value="Democrat"> 
<label> Democrat </label> */}

const presented_number = 10;
const buttonNames = ["D", "R", "I", "O"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other"]

function createMainPage(pageNum) {
    for (let i = 0; i < presented_number; i++) {
        console.log("building div");
        createDiv(i + 1);
    }

    createFourButtons(pageNum);
    createSubmitButton();
}

function createDiv(i) {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerHTML = i.toString() + ". ";
    p.id = i.toString() + "Tweet";
    div.appendChild(p);

    document.body.appendChild(div);
}

function createFourButtons(i) {
    let button_div = document.createElement("div");

    for (let j = 0; j < buttonNames.length; j++) {
        createButton(button_div, i.toString() + buttonNames[j], "Choices" + i.toString(), buttonValues[j], "radio");
    }

    document.body.appendChild(button_div);

}

function createButton(div, id, name, value, type) {
    let button_div = document.createElement("div");
    button_div.className = "button_div";

    let button1 = document.createElement("input");
    button1.type = type;
    button1.name = name;
    button1.value = value;
    button1.id = id;

    let label1 = document.createElement("label");
    label1.htmlFor = id;

    let description1 = document.createTextNode(value);
    label1.appendChild(description1);

    //let newline = document.createElement('br');

    button_div.appendChild(button1);
    button_div.appendChild(label1);
    //div.appendChild(newline);

    div.appendChild(button_div);
}

function createSubmitButton() {
    // <button id='submitButton'> Submit </button> 

    let submitButton_div = document.createElement("div");
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "submitButton";

    submitButton_div.appendChild(submitButton);

    document.body.appendChild(submitButton_div);


}
 
createMainPage(1);

