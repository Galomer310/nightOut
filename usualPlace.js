// the price of drinks at my usual pub 

var beer = 24;
var caesar = 8;

// total account array
var TotalCount = 0;
var beerPayment = 0;
var caesarPayment = 0;
var foodPayment = 0;

document.getElementById("beer").addEventListener("click", function() {
    var beerCount = prompt("How many beers did you drink?");
    beerCount = Number(beerCount);
    beerPayment = beer * beerCount;
    document.getElementById("beer").innerHTML = beerPayment.toFixed(1);
    updateTotal(); 
});
document.getElementById("shot").addEventListener("click", function() {
    var caesarCount = prompt("How many caesars did you have?");
    caesarCount = Number(caesarCount);
    caesarPayment = caesar * caesarCount;
    document.getElementById("shot").innerHTML = caesarPayment.toFixed(1);
    updateTotal();
});
// //////////////////////////////////////////////////////////////////////////////////////////



document.getElementById("food").addEventListener("click", function() {
    var food = prompt("What was the cost of the dish?");
    food = Number(food);
    var participants = prompt("How many people shared the dish? If only you, press 1");
    participants = Number(participants);
    foodPayment = food / participants;
    document.getElementById("food").innerHTML = foodPayment.toFixed(1);
    updateTotal();
});

// //////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("tip").addEventListener("click", function() {
    var tipByPercentage = prompt("What percentage of tip would you like to leave? Type a number!");
    tipByPercentage = Number(tipByPercentage);
    var tipToAdd = (TotalCount * tipByPercentage) / 100; 
    document.getElementById("tip").innerHTML = tipToAdd.toFixed(1);

    var needToPay = TotalCount + tipToAdd;
    document.getElementById("Payment").innerHTML = needToPay.toFixed(1); // Ensure it displays with one decimal place
    });

function updateTotal() {
    TotalCount = beerPayment + caesarPayment + foodPayment;
    document.getElementById("Payment").innerHTML = TotalCount.toFixed(1);
}















// document.getElementById("Payment").style.color = "red";

