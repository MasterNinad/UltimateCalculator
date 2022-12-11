function sqFunc() {
    const sqRootText = document.getElementById("sqText").value;
    document.getElementById("sqAns").value = sqRootText * sqRootText;
};

function sqRootFunc() {
    const sqRootText = document.getElementById("sqRootText").value;
    document.getElementById("sqRootAns").value = Math.sqrt(sqRootText);
};

function cuFunc() {
    const cuText = document.getElementById("cuText").value;
    document.getElementById("cuAns").value = cuText * cuText * cuText;
};

function cuRootFunc() {
    const cuRootText = document.getElementById("cuRootText").value;
    document.getElementById("cuRootAns").value = Math.cbrt(cuRootText);
};

function sumFunc() {
    const sumText = document.getElementById("sumText").value;
    const ans = 1;
    for (let i = 1; i <= sumText; i++) {
        ans = ans + i;
    }
    document.getElementById("sumAns").value = ans;
};