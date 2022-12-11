const validChars = ["+", "-", "×", "÷", "%", ".", "/", "*"];

window.onload = function () {
    let input = document.getElementById("mainBody");
    input.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) {
            calculate();
        }
    }, false)
}

function ansKey(e) {
    let key = e.key;
    if (isNaN(key)) {
        if (!validChars.includes(key)) {
            e.preventDefault();
        }
    }
}

function appendText(text) {
    let ans = document.getElementById("answer");
    ans.value += text.value;
}

function lastClearText() {
    let text = document.getElementById("answer").value;
    let result = text.slice(0, -1);
    document.getElementById("answer").value = result;
}

function calculate() {
    let input = document.getElementById("answer").value;
    input = input.replace("÷", "/");
    input = input.replace("×", "*")
    let result = Function("return " + input)();
    document.getElementById("answer").value = result;
}
