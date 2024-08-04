// the price of drinks at my usual pub 

var beer = 0;
var chaser = 0;

// total account array
var TotalCount = 0;
var beerPayment = 0;
var chaserPayment = 0;
var foodPayment = 0;


document.getElementById("beer").addEventListener("click", function() {
    var beer = prompt("what is the cost of one beer?");
    beer = Number(beer);
    var beerCount = prompt("How many beers did you drink?");
    beerCount = Number(beerCount);
    beerPayment = beer * beerCount;
    document.getElementById("beer").innerHTML = beerPayment;
    updateTotal(); 
});

///////////////////////////////////////////////////////////////////////////////////////// the class vertion///////////////////
// document.getElementsByClassName("Beer")[0].addEventListener("click", function() {
//     var beer = prompt("what is the cost of one beer?");
//     beer = Number(beer);
//     var beerCount = prompt("How many beers did you drink?");
//     beerCount = Number(beerCount);
//     beerPayment = beer * beerCount;
//     document.getElementsByClassName("Beer")[0].innerHTML = beerPayment;
//     updateTotal(); 
// });

document.getElementById("shot").addEventListener("click", function() {
    var chaser = prompt("what is the cost of one shot?");
    chaser = Number(chaser);
    var chaserCount = prompt("How many caesars did you have?");
    chaserCount = Number(chaserCount);
    chaserPayment = chaser * chaserCount;
    document.getElementById("shot").innerHTML = chaserPayment;
    updateTotal();
});

///////////////////////////////////////////////////////////////////////////////////////// the class vertion///////////////////
// document.getElementsByClassName("Shot")[0].addEventListener("click", function() {
//     var chaser = prompt("what is the cost of one chaser?");
//     chaser = Number(chaser);
//     var chaserCount = prompt("How many caesars did you have?");
//     chaserCount = Number(chaserCount);
//     chaserPayment = chaser * chaserCount;
//     document.getElementsByClassName("Shot")[0].innerHTML = chaserPayment;
//     updateTotal();
// });


document.getElementById("food").addEventListener("click", function() {
    var food = prompt("What was the cost of the dish?");
    food = Number(food);
    var participants = prompt("How many people shared the dish? If only you, press 1");
    participants = Number(participants);
    foodPayment = food / participants;
    document.getElementById("food").innerHTML = foodPayment;
    updateTotal();
});

///////////////////////////////////////////////////////////////////////////////////////// the class vertion///////////////////
// document.getElementsByClassName("Food")[0].addEventListener("click", function() {
//     var food = prompt("What was the cost of the dish?");
//     food = Number(food);
//     var participants = prompt("How many people shared the dish? If only you, press 1");
//     participants = Number(participants);
//     foodPayment = food / participants;
//     document.getElementsByClassName("Food")[0].innerHTML = foodPayment;
//     updateTotal();
// });

document.getElementById("tip").addEventListener("click", function() {
    var tipByPercentage = prompt("What percentage of tip would you like to leave? Type a number!");
    tipByPercentage = Number(tipByPercentage);
    var tipToAdd = (TotalCount * tipByPercentage) / 100; 
    document.getElementById("tip").innerHTML = tipToAdd;
    var needToPay = TotalCount + tipToAdd;
    document.getElementById("new_Payment").innerHTML = needToPay; // Corrected ID selection
});

///////////////////////////////////////////////////////////////////////////////////////// the class vertion///////////////////
// document.getElementsByClassName("tip")[0].addEventListener("click", function() {
//     var tipByPercentage = prompt("What percentage of tip would you like to leave? Type a number!");
//     tipByPercentage = Number(tipByPercentage);
//     var tipToAdd = (TotalCount * tipByPercentage) / 100; 
//     document.getElementsByClassName("tip")[0].innerHTML = tipToAdd;

//     var needToPay = TotalCount + tipToAdd;
//     document.getElementById("new_Payment").innerHTML = "Total need to pay = " + needToPay; // Corrected ID selection
// });

function updateTotal() {
    TotalCount = beerPayment + chaserPayment + foodPayment;
    document.getElementById("new_Payment").innerHTML = TotalCount;
}
