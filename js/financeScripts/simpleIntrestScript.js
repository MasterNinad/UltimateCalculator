let principal = document.getElementById("SIprincipalText");
let years = document.getElementById("SIyearsText");
let rate = document.getElementById("SIrateText");
let amount = document.getElementById("SIamountText");
let interest = document.getElementById("SIinterestText");

function SIprincipalFunc() {
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

function SIrateFunc() {
    if (interest.value == "") {
        alert("Please enter Interest to find Rate!");
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Rate!");
    }
    else if (years.value == "") {
        alert("Please enter Years to find Rate!");
    }
    else {
        let ans = interest.value / (principal.value * years.value);
        rate.value = ans;
        document.getElementById("ratePercentText").innerHTML = ans * 100 + "%";
    }
}

function SIyearsFunc() {
    if (interest.value == "") {
        alert("Please enter Interest to find Years!");
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

function SIamountFunc() {
    if (interest.value == "") {
        alert("Please enter Intrest to find Amount!");
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Amount!");
    }
    else {
        amount.value = interest.value + principal.value;
    }
}

function SIintrestFunc() {
    if (amount.value != "" && principal.value != "") {
        interest.value = amount.value - principal.value;
    }
    else if (principal.value == "") {
        alert("Please enter Principal to find Interest!");
    }
    else if (rate.value == "") {
        alert("Please enter Rate to find Interest!");
    }
    else if (years.value == "") {
        alert("Please enter Years to find Interest!");
    }
    else {
        let ans = (principal.value * rate.value * years.value) / 100;
        interest.value = ans;
    }
}