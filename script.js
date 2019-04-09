
var tip, drop, people;

function calcTip() {
    tip = document.getElementById("bill").value;
    drop = document.getElementById("rating").value;
    people = document.getElementById("people").value;

if (tip === "" || drop === 0) {
    alert("Please Enter Bill Information")
    return;
}

if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display ="none";
} else {
    document.getElementById("each").style.display ="block";
}

var total = (tip * drop) / people;

total = Math.round(total * 100) / 100;

total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calcTip();

};