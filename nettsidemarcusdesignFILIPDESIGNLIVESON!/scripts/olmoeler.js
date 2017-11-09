/*
FILE NAME: scripts/olmoeler.js
WRITTEN BY: Marcus Tiedemann Økland Henriksbø
WHEN: November 2017
PURPOSE: Counter for beer
 */

let start = new Date(2017, 8, 1);
let rate = (500/30/24/60/60/1000);
let already_beer = 500.00;


function Beer_maker(){
    elapsed = new Date();
    beers = parseFloat((elapsed - start) * rate).toFixed(3) + already_beer;
    document.getElementById("oel").innerHTML = "<input id=\"oelbilde\" type=\"image\"  src=\"images/beer.png\" alt=\"Øl:\" oninput=\"this.drink();\"/>"

        + "<b>"+parseFloat(beers).toFixed(3)+"</b>" +"  liter brygget";


    document.getElementById("oelbilde").oninput = drink;

}



function drink(){
    console.log("IS THIS WORKING?");
}


setInterval(Beer_maker, 100);

console.log(new Date()- start);
console.log(new Date());

