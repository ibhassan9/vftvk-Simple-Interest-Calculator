function compute() {
    p = document.getElementById("principal").value;
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    document.getElementById("result").innerHTML = `If you deposit ${principal},<br />at an interest rate of ${rate}.<br />You will receive an amount of ${interest},<br />in the year ${actualYear(years)}`

}

function actualYear(years) {
    return new Date().getFullYear() + parseInt(years);
}

function setSliderData(data) {
    document.getElementById("rate_result").innerHTML = data + " %";
}
