function calc(operation){

let Num1 = Number(document.getElementById("Num1").value);
let Num2= Number(document.getElementById("Num2").value);

let calculate;

if (operation == "Add"){
    calculate = Num1 + Num2;
}

else if (operation == "Sub"){
    calculate = Num2 - Num1;
}

else if (operation == "Mul"){
    calculate = Num1 * Num2;
}

else if (operation == "Div"){
    calculate = Num2 / Num1;
}

document.getElementById("calculate").innerHTML= calculate;

}