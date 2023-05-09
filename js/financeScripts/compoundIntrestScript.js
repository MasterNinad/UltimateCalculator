let principal = document.getElementById("CIprincipalText");
let years = document.getElementById("CIyearsText");
let rate = document.getElementById("CIrateText");
let amount = document.getElementById("CIamountText");
let interest = document.getElementById("CIinterestText");

function CIprincipalFunc() {
    if (interest.value != "" && amount.value != "") {
        let ans = amount.value - interest.value;
        principal.value = ans;
        return;
    }
}

function CIyearsFunc() {
    
}

function CIrateFunc() {
    
}

function CIamountFunc() {
    let ans = principal.value * ((1 + rate.value / 100) ** years.value)
    amount.value = ans;
}

function CIintrestFunc() {
    
}