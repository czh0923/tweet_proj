finalButton.addEventListener("click", pressNext);

function getUserInput() {

}

function progressBarChange(curPageNum) {
    console.log(curPageNum / presented_user_number * 100);
    progressBarInner.style.width = (curPageNum / presented_user_number * 100).toString() + "%";
}

function pressSubmit() {

}


function reloadPage() {
    window.location.reload();
}

function pressNext() {

    if (curPageNum == presented_user_number - 1) {
        finalButton.innerHTML = "Submit";
    } else if (curPageNum == presented_user_number) {
        pressSubmit();
    } else {
        curPageNum += 1;
        // reloadPage();
        progressBarChange(curPageNum);
    }

}