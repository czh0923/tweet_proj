
var cur = 0;
const maxPage = 20;

const nextButton = document.getElementById("nextButton");
const progressBarInner = document.getElementById("progressBarInner");
// const progressBarInner = document.querySelector(".progressBarInner");

function clickButton() {
    cur = Math.min(maxPage, cur + 1);
    console.log(cur / maxPage * 100);
    progressBarInner.style.width = (cur / maxPage * 100).toString() + "%";
}

nextButton.addEventListener("click", clickButton);