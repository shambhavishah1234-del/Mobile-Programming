let balance = "10000";
let correctPin= "1234";

function checkPin() {
    let pin = document.getElementById("pin").value;
    if (pin == correctPin) {
        document.getElementById("result").innerHTML = "Pin is correct. You can now perform transactions.";
    } else {
        document.getElementById("result").innerHTML = "Incorrect pin. Please try again.";
    }
}

function viewBalance(){
    let pin = document.getElementById("pin").value;
    if (pin !== correctPin) {
        document.getElementById("result").innerHTML =
            "Please enter the correct PIN.";
    } else{
    document.getElementById("result").innerHTML = "Your balance is: $" + balance;
    }
}

function withdraw(){
    let amount = Number(document.getElementById("amount").value);
    let pin = document.getElementById("pin").value;

    if (pin !== correctPin) {
        document.getElementById("result").innerHTML =
            "Please enter the correct PIN.";
    }

    else if (amount > balance) {
document.getElementById('result').innerHTML = 'insufficient balance';
} else if (amount <= 0){
document.getElementById('result').innerHTML = 'Invalid amount';
} else if (amount % 100 !== 0){
    document.getElementById('result').innerHTML = 'Amount must be a multiple of 100';
} else {
    balance = balance - amount; 
    document.getElementById('result').innerHTML = 'Withdraw Successful! Your new balance is Rs.'+ balance;
}
}
function deposit(){
	let amount = Number(document.getElementById("amount").value);
	let pin = document.getElementById("pin").value;

if (pin !== correctPin) {
        document.getElementById("result").innerHTML =
            "Please enter the correct PIN.";
    }
else if (amount <= 0) {
document.getElementById('result').innerHTML = "Invalid Amount";

} else if (amount % 100 != 0){
document.getElementById('result').innerHTML = "Amount must be a multiple of 100";
}
else {
balance = balance + amount;
document.getElementById('result').innerHTML = "Amount Deposited:" + balance;
}

}

