(function(){


    addLoadEvent(parallex);
    window.onscroll = parallex;

})();



function parallex(){
    let parallax2 = document.querySelectorAll("body"),
        speed = 0.5;
    [].slice.call(parallax2).forEach(function(el,i){

        let windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

    });
}