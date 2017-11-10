/*
FILE NAME: scripts/olmoeler.js
WRITTEN BY: Marcus Tiedemann Økland Henriksbø
WHEN: November 2017
PURPOSE: Counter for beer
 */

let start = new Date(2017, 8, 1);
let rate = (500/30/24/60/60/1000);
let already_beer = 500.00;



function install_Beer_DOM(){
    document.getElementById("oel").innerHTML =
        "<div id=\"oelbildeclipping\" class=\"noSelect\" >"
        +
        "<input id=\"oelbilde\" class=\"noSelect\" type=\"image\"  src=\"images/beer.png\" alt=\"Øl:\" onclick=\"drink();\"/>"
        +"</div>"
        +  "<img id=\"oelbildeempty\" class=\"noSelect\"  src=\"images/beerempty.png\">"

        + "<b id=\"literbrygget\">"+"</b>" +"  liter brygget"

    +"<audio src=\"sounds/drinkingSound1.wav\" id=\"drinkingSound1\" autostart=\"false\"></audio>"
    +"<audio src=\"sounds/drinkingSound2.wav\" id=\"drinkingSound2\" autostart=\"false\"></audio>"
    +"<audio src=\"sounds/burping.wav\" id=\"burping\" autostart=\"false\"></audio>"
    ;
    Beer_maker();
}



function Beer_maker(){
    elapsed = new Date();
    beers = parseFloat((elapsed - start) * rate).toFixed(3) + already_beer;
    document.getElementById("literbrygget").innerHTML= parseFloat(beers).toFixed(0);
}



drinkingAnimationIntervalId = -1;

function drink(){
    if(currentFrame === 0)
        drinkingAnimationIntervalId = setInterval(drinkingFrame,20)
}


currentFrame = 0;
toppx = 0;

function drinkingFrame(){
    if(currentFrame > 20 && currentFrame < 40){

    }

    else if(currentFrame > 50 && currentFrame < 70){

    }
    else{
        toppx += 1;
    }

    if(currentFrame === 0){

        document.getElementById('drinkingSound1').play();
    }

    if(currentFrame === 40){
        document.getElementById('drinkingSound1').currentTime=0;
        document.getElementById('drinkingSound1').play();
    }

    if(currentFrame === 70){
        document.getElementById('drinkingSound2').play();
    }

    document.getElementById('oelbildeclipping').style.top = toppx.toString() + "px";
    document.getElementById('oelbilde').style.top = (-toppx).toString() + "px";
    currentFrame ++;

    if(currentFrame === 100){
        clearInterval(drinkingAnimationIntervalId);
        currentFrame = 0;
        toppx = 0;
        document.getElementById('burping').play();
    }
    console.log("FILIP")
}

addLoadEvent(install_Beer_DOM);



console.log(new Date()- start);
console.log(new Date());

