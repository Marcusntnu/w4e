/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */





scrollHeight = 0;
intervalId = -1;
content = null;
function unScroll(){
    content = document.getElementById("cover");
    /*scrollHeight = scroll.style.height;*/
    scrollHeight= parseInt(window.getComputedStyle(content,null).getPropertyValue("height"), 10);
    intervalId= setInterval(unScrollAnimation,10);

}

animationHeight = 25;
function unScrollAnimation(){
    animationHeight +=1;
    /*
    animationHeight =Math.pow(animationHeight,1.02);*/
    content.style.height =animationHeight.toString()+"px";

    if(animationHeight > scrollHeight){
        clearInterval(intervalId);
        content.style.height = "auto";/*animationHeight.toString() + "px";*/
    }
}






