<<<<<<< HEAD
(function(){


    addLoadEvent(parallex);
    window.onscroll = parallex;

})();


=======

function callBoth(){
    parallex();
    loadNavbar();
    loadpage();
}

>>>>>>> b94d57be01c66169e2b76bf521977ba9bd1e9a4e

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
