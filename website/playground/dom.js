
{/* <input type="radio" name="Choices1" id="1D" value="Democrat"> 
<label> Democrat </label> */}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const buttonNames = ["D", "R", "I", "O"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other"]

function createDiv(i) {
    let div = document.createElement("div");
    createFourButtons(div, i);
    document.body.appendChild(div);
}

function createFourButtons(div, i) {

    for (let j = 0; j < buttonNames.length; j++) {
        createButton(div, i.toString() + buttonNames[j], "Choices" + i.toString(), buttonValues[j], "radio");
    }

}

function createButton(div, id, name, value, type) {
    console.log(id, name, value, type);
    let button1 = document.createElement("input");
    button1.type = type;
    button1.name = name;
    button1.value = value;
    button1.id = id;

    let label1 = document.createElement("label");
    label1.htmlFor = id;

    let description1 = document.createTextNode(value);
    label1.appendChild(description1);

    let newline = document.createElement('br');

    div.appendChild(button1);
    div.appendChild(label1);
    div.appendChild(newline);
}

createDiv(1);
createDiv(2);

