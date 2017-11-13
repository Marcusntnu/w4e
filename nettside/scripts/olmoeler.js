/*
FILE NAME: scripts/olmoeler.js
WRITTEN BY: Marcus Tiedemann Økland Henriksbø
WHEN: November 2017
PURPOSE: Counter for beer
 */

let start = new Date(2017, 8, 1);
let rate = (500 / 30 / 24 / 60 / 60 / 1000);
let already_beer = 500.00;


/*Plasserer koden for ølen, litertelleren og lydene for ølen oppe til venstre gjennom DOM*/
function install_Beer_DOM() {
    document.getElementById("oel").innerHTML =
        "<div id=\"oelbildeclipping\" class=\"noSelect\" >" +
        "<input id=\"oelbilde\" class=\"noSelect\" type=\"image\"  src=\"images/beer.png\" alt=\"Øl:\" onclick=\"drink();\"/>" +
        "</div>" +
        "<img id=\"oelbildeempty\" class=\"noSelect\"  src=\"images/beerEmpty.png\">"

        +
        "<b id=\"literbrygget\">" + "</b>" + "  liter brygget"

        +
        "<audio src=\"sounds/drinkingSound1.wav\" id=\"drinkingSound1\" autostart=\"false\"></audio>" +
        "<audio src=\"sounds/drinkingSound2.wav\" id=\"drinkingSound2\" autostart=\"false\"></audio>" +
        "<audio src=\"sounds/burping.wav\" id=\"burping\" autostart=\"false\"></audio>";


    Beer_maker();
}


/*Oppdaterer litermåleren*/
function Beer_maker() {
    elapsed = new Date();
    /*Kalkulerer nåværende liter brygget*/
    beers = parseFloat((elapsed - start) * rate).toFixed(3) + already_beer;
    /*Plasserer den via DOM*/
    document.getElementById("literbrygget").innerHTML = parseFloat(beers).toFixed(0);
}



drinkingAnimationIntervalId = -1;

/*Starter animasjonen på drikkingen av ølen, dette skjer når ølen blir trykket på*/
function drink() {
    if (currentFrame === 0)
        drinkingAnimationIntervalId = setInterval(drinkingFrame, 20);
}

/*Nåværende frame på animasjonen*/
currentFrame = 0;

/*Top posisjon for oelbildeclipping objektet.*/
toppx = 0;
/*Funksjon for hver frame av ølanimasjonen*/
function drinkingFrame() {
    if (currentFrame > 20 && currentFrame < 40) {

    } else if (currentFrame > 50 && currentFrame < 70) {

    } else {
        toppx += 1;
    }

    if (currentFrame === 0) {

        document.getElementById('drinkingSound1').play();
    }

    if (currentFrame === 40) {
        document.getElementById('drinkingSound1').currentTime = 0;
        document.getElementById('drinkingSound1').play();
    }

    if (currentFrame === 70) {
        document.getElementById('drinkingSound2').play();
    }

    document.getElementById('oelbildeclipping').style.top = toppx.toString() + "px";
    document.getElementById('oelbilde').style.top = (-toppx).toString() + "px";
    currentFrame++;

    if (currentFrame === 100) {
        clearInterval(drinkingAnimationIntervalId);
        currentFrame = 0;
        toppx = 0;
        document.getElementById('burping').play();
    }
}
/*Kall install_beer_DOM når websiden er ferdig lastet inn*/
addLoadEvent(install_Beer_DOM);

/*Oppdater litermåleren hvert sekund*/
setInterval(Beer_maker, 1000);