var principal = document.getElementById("principalText");
var years = document.getElementById("yearsText");
var rate = document.getElementById("rateText");
var amount = document.getElementById("amountText");
var interest = document.getElementById("interestText");

function principalFunc() {
    if (interest.value == "" || rate.value == "" || years.value == "") {
        console.log("error");
    }
    else if (interest.value != "" && amount.value != "") {
        var ans = amount.value - interest.value;
        principal.value = ans;
    }
    else {
        var percentRate = rate.value / 100;
        var ans = interest.value / (percentRate * years.value);
        principal.value = ans;
    }
}

function rateFunc() {
    if (interest.value == "" || principal.value == "" || years.value == "") {
        console.log("error");
    }
    else {
        var ans = interest.value / (principal.value * years.value);
        rate.value = ans;
        document.getElementById("ratePercentText").innerHTML = ans * 100 + "%";
    }
}