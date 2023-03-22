let principal = document.getElementById("principalText");
let years = document.getElementById("yearsText");
let rate = document.getElementById("rateText");
let amount = document.getElementById("amountText");
let interest = document.getElementById("interestText");

function principalFunc() {
    if (interest.value == "" || rate.value == "" || years.value == "") {
        console.log("error");
    }
    else if (interest.value != "" && amount.value != "") {
        let ans = amount.value - interest.value;
        principal.value = ans;
    }
    else {
        let percentRate = rate.value / 100;
        let ans = interest.value / (percentRate * years.value);
        principal.value = ans;
    }
}

function rateFunc() {
    if (interest.value == "" || principal.value == "" || years.value == "") {
        console.log("error");
    }
    else {
        let ans = interest.value / (principal.value * years.value);
        rate.value = ans;
        document.getElementById("ratePercentText").innerHTML = ans * 100 + "%";
    }
}

function yearsFunc() {
    if (interest.value == "" || principal.value == "" || rate.value == "") {
        console.log("error");
    }
    else {
        let ans = (100 * interest.value) / (principal.value * rate.value);
        years.value = ans;
    }
}