var principal = document.getElementById("principalText");
var years = document.getElementById("yearsText");
var rate = document.getElementById("rateText");
var amount = document.getElementById("amountText");
var intrest = document.getElementById("intrestText");

function principalFunc() {
    if (intrest.value == "" || rate.value == "" || time.value == "") {
        console.log("error");
    }
    else if (intrest.value != "" || amount.value != "") {
        var ans = amount.value - intrest.value;
        principal.value = ans;
    }
    else {
        var ans = intrest.value / rate.value * time.value;
        principal.value = ans;
    }
}

function rateFunc() {
    if (intrest.value == "" || principal.value == "" || time.value == "") {
        console.log("error");
    }
    else {
        var ans = intrest.value / principal.value * time.value;
        rate.value = ans;
    }
}