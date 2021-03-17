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
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br />at an interest rate of <mark>${rate}</mark>.<br />You will receive an amount of <mark>${interest}</mark>,<br />in the year <mark>${actualYear(years)}</mark>`

}

function actualYear(years) {
    return new Date().getFullYear() + parseInt(years);
}

function setSliderData(data) {
    document.getElementById("rate_result").innerHTML = data + " %";
}
