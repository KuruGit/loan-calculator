//Listen for submit button
document.getElementById('loan-form').addEventListener('submit', calculateResults);
function calculateResults(e){
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
    showError("Bitte prüfen sie ihre Eingabe!");
}

e.preventDefault();
}

//Error Handling Function

function showError(error){
    //create a div
    const errorDiv = document.createElement('div');
    //get Elements to sort errorDiv into DOM
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    //add Bootstrap class to make Div dangerous-red 
    errorDiv.className = "alert alert-danger";
    //add Textnode to errorDiv with error text from if/else statement to check if monthly is finite
    errorDiv.appendChild(document.createTextNode(error));
    //insert error message before heading
    card.insertBefore(errorDiv, heading);

    //clear error after set time

    setTimeout(clearError, 2000);
}
//TODO:Timeout for the showError function. SetTimeout first test did not work. Problem: with every click another error message is generated
//Clear error
function clearError(){
    document.querySelector(".alert").remove();
}