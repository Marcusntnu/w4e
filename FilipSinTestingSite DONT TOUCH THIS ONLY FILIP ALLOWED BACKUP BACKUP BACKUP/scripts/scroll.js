/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */



function loadScrollBegining(){
   /* let scroll = document.getElementById("scroll");

    scroll.innerHTML ="";
*/


}

scrollHeight = 0;
intervalId = -1;
content = null;
function unScroll(){
    content = document.getElementById("content");
    /*scrollHeight = scroll.style.height;*/
    scrollHeight= parseInt(window.getComputedStyle(content,null).getPropertyValue("height"), 10);
    console.log(scrollHeight);
    intervalId= setInterval(unScrollAnimation,10);
}

animationHeight = 50;
function unScrollAnimation(){
    animationHeight =Math.pow(animationHeight,1.02);
    content.style.height =animationHeight.toString()+"px";

    if(animationHeight > scrollHeight){
        clearInterval(intervalId);
        content.style.height = "auto";/*animationHeight.toString() + "px";*/
    }
}




addLoadEvent(loadScrollBegining);
addLoadEvent(unScroll);




