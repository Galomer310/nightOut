var beerCost = 0;       
var chaserCost = 0;

var TotalCount = 0;
var beerPayment = 0;
var chaserPayment = 0;
var foodPayment = 0;

document.getElementById("beer").addEventListener("click", function() {
    beerCost = prompt("What is the cost of one beer?");
    beerCost = Number(beerCost);
    var beerCount = prompt("How many beers did you drink?");
    beerCount = Number(beerCount);
    beerPayment = beerCost * beerCount;
    document.getElementById("beer").innerHTML = beerPayment.toFixed(1);
    updateTotal(); 
});

document.getElementById("shot").addEventListener("click", function() {
    chaserCost = prompt("What is the cost of one shot?");
    chaserCost = Number(chaserCost);
    var chaserCount = prompt("How many shots did you have?");
    chaserCount = Number(chaserCount);
    chaserPayment = chaserCost * chaserCount;
    document.getElementById("shot").innerHTML = chaserPayment.toFixed(1);
    updateTotal();
});

document.getElementById("food").addEventListener("click", function() {
    var food = prompt("What was the cost of the dish?");
    food = Number(food);
    var participants = prompt("How many people shared the dish? If only you, press 1");
    participants = Number(participants);
    foodPayment = food / participants;
    document.getElementById("food").innerHTML = foodPayment.toFixed(1);
    updateTotal();
});

document.getElementById("tip").addEventListener("click", function() {
    var tipByPercentage = prompt("What percentage of tip would you like to leave? Type a number!");
    tipByPercentage = Number(tipByPercentage);
    var tipToAdd = (TotalCount * tipByPercentage) / 100;
    document.getElementById("tip").innerHTML = tipToAdd.toFixed(1);  
    var needToPay = TotalCount + tipToAdd;
    document.getElementById("new_Payment").innerHTML = needToPay.toFixed(1);
});

function updateTotal() {
    TotalCount = beerPayment + chaserPayment + foodPayment;
    document.getElementById("new_Payment").innerHTML = TotalCount.toFixed(1);  
}
