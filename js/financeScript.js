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
    if (interest.value == "") {
        alert("Please enter Intrest to find Years!");
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Years!");
    }
    else if (rate.value == "") {
        alert("Please enter Rate to find Years!");
    }
    else {
        let ans = (100 * interest.value) / (principal.value * rate.value);
        years.value = ans;
    }
}

function amountFunc() {
    if (intrest.value == "") {
        alert("Please enter Intrest to find Amount!");
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Amount!");
    }
    else {
        amount.value = intrest.value + principal.value;
    }
}

function intrestFunc() {
    if (amount.value != "" && principal.value != "") {
        intrest.value = amount.value - principal.value;
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Intrest!");
    }
    else if (rate.value == "") {
        alert("Please enter Rate to find Intrest!");
    }
    else if (years.value == "") {
        alert("Please enter Years to find Intrest!");
    }
    else {
        let ans = (principal.value * rate.value * years.value) / 100;
        interest.value = ans;
    }
}