function sum(){

let Sub1= Number(document.getElementById("Sub1").value);
let Sub2= Number(document.getElementById("Sub2").value);
let Sub3= Number(document.getElementById("Sub3").value);
let Sub4= Number(document.getElementById("Sub4").value);
let Sub5= Number(document.getElementById("Sub5").value);
let Sub6= Number(document.getElementById("Sub6").value);
let Sub7= Number(document.getElementById("Sub7").value);
let Sub8= Number(document.getElementById("Sub8").value);
if (Sub1 > 100 || Sub1 < 0 ||
    Sub2 > 100 || Sub2 < 0 ||
    Sub3 > 100 || Sub3 < 0 ||
    Sub4 > 100 || Sub4 < 0 ||
    Sub5 > 100 || Sub5 < 0 ||
    Sub6 > 100 || Sub6 < 0 ||
    Sub7 > 100 || Sub7 < 0 ||
    Sub8 > 100 || Sub8 < 0) {

    document.getElementById("result").innerHTML = "Marks must be between 0 and 100";
    document.getElementById("result").style.color = "red";

    return;
}

let result = Sub1+Sub2+Sub3+Sub4+Sub5+Sub6+Sub7+Sub8;

if (result >=600){
document.getElementById("result").innerHTML= result + "-Pass";
document.getElementById("result").style.color = "green";
}
else if (result >=500) {
document.getElementById("result").innerHTML = result + "1st Div";
}
else if (result >=400) {
document.getElementById("result").innerHTML = result + "2nd Div";
}
else {
document.getElementById("result").innerHTML= result + "Fail";
document.getElementById("result").style.color = "red";
}
}