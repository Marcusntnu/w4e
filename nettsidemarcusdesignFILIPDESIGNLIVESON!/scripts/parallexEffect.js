<<<<<<< HEAD

function callBoth(){
    parallex();
    loadNavbar();
    loadpage();
}
=======
(function(){


    addLoadEvent(parallex);
    window.onscroll = parallex;

})();

>>>>>>> parent of 11e784b... Merge branch 'master' of https://github.com/skanin/w4e


function parallex(){
    let parallax2 = document.querySelectorAll("body"),
        speed = 0.5;
    [].slice.call(parallax2).forEach(function(el,i){

        let windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

    });
}