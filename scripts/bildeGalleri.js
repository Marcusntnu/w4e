/*
FILE NAME: scripts/bildeGalleri.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: Slideshow for the gallery page
 */


let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideshow = document.getElementById("slideshow");
let container = document.getElementsByClassName("container");
let imageGrid = document.getElementById("imageGrid");


let imageFileNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let i = 0;
next.onclick = function (evt) {
    evt.preventDefault();
    if(i === imageFileNames.length-1){
        i = 0;
    }else {
        i++;
    }
    slideshow.src = "images/sample/" + imageFileNames[i];
};

prev.onclick = function (evt) {
    evt.preventDefault();
    if(i === 0){
        i = imageFileNames.length-1;
    }else{
        i--
    }
    slideshow.src = "images/sample/" + imageFileNames[i];
};

function imageClick(evt) {
    
}


for(let i = 0; i < imageFileNames.length; i++){
    let x = document.createElement("img");
    x.setAttribute("id", i);
    x.setAttribute("class", "image");
    x.setAttribute("src", "images/sample/" + imageFileNames[i]);
    x.setAttribute("width", "150px");
    x.setAttribute("height", "150px");
    x.setAttribute("onclick", "imageClick(this)");
    imageGrid.appendChild(x);
}