
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
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calcTip();

};