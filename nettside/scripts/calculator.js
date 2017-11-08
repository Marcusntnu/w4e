/*
FILE NAME: scripts/calculator.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: October 2017
PURPOSE: Calculator for abv in beer brew
 */


//Referanser til HTML-elementer
let og = document.getElementById("og");
let fg = document.getElementById("fg");
let result = document.getElementById("result");
let btnSubmit = document.getElementById("btnSubmit");
let btnReset = document.getElementById("btnReset");

//Deklarasjon av en variabel for videre bruk.
let abv;

//Når knappen med ID "btnSubmit", skal valuene i input elementene kjøres i en formel og skrives til siden.
btnSubmit.onclick = function calc (evt) {
    evt.preventDefault();
    abv = (og.value - fg.value) * 131.21;
    result.innerHTML = "Abv: " + abv.toFixed(2);
    result.style.visibility = "visible";
};


//Funksjonen reseter formet.
btnReset.onclick = function (evt) {
    evt.preventDefault();
    og.innerHTML = "";
    fg.innerHTML = "";
    result.innerHTML = "  ";
    result.style.visibility = "hidden";
};