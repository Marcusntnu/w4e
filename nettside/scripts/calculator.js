/*
FILE NAME: scripts/calculator.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: October 2017
PURPOSE: Calculator for abv in beer brew
 */

let og = document.getElementById("og");
let fg = document.getElementById("fg");
let result = document.getElementById("result");
let btnSubmit = document.getElementById("btnSubmit");

let abv;

btnSubmit.onclick = function calc (evt) {
    evt.preventDefault();
    abv = (og.value - fg.value) * 131.21;
    result.innerHTML = "Abv: " + abv.toFixed(2);
};