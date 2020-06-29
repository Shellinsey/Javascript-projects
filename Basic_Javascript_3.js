function subtraction_Function() {
    var Subtraction = 10 - 20;
    document.getElementById("Math2").innerHTML = "10 - 20 = " + Subtraction;
    
}
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have remainder of: " + simple_Math;
 }

function more_Math () {
    var simple_Math = (1+2) * 10/ 2-5;
    document.getElementById ("Math3").innerHTML = "1 plus 2, multiplied by 10 divided in half and then subtracted by 5 equals " + simple_Math;
}


function negation_Operator () {
    var x = 10;
    document.getElementById ("Math4") .innerHTML = -x;
}           

var X = 5;
X--;
document.write(X);