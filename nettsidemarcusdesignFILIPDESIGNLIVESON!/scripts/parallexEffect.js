
function callBoth(){
    parallex();
    loadNavbar();
    loadpage();
}


function parallex(){
    let parallax2 = document.querySelectorAll("body"),
        speed = 0.5;
    [].slice.call(parallax2).forEach(function(el,i){

        let windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

    });
}


(function(){


    window.onload= callBoth;
    window.onscroll = parallex;

})();


// Makes the page-loader effects go away when page is loaded
function loadpage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadpage").style.display = "none";
}
