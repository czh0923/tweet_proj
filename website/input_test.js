
function getValue() {
    var value = document.querySelector('input[name=Choices1]:checked').value;

    console.log(value);
}

document.getElementById("submitButton").addEventListener("click", getValue);