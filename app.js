//Listen for submit button
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//UI Vars
const UIamount = document.getElementById('amount');
const UIinterest = document.getElementById('interest');
const UIyears = document.getElementById('years');
const UImonthlyPayment = document.getElementById('monthly-payment');
const UItotalPayment = document.getElementById('total-payment');
const UItotalInterest = document.getElementById('total interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//compute monthly payment

const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly*calculatedPayments).toFixed(2);
    UItotalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
} else {
    console.log("Bitte Zahlen checken!");
}

//Calculate Results
function calculateResults(){
    alert("Klickedicklick");
}

