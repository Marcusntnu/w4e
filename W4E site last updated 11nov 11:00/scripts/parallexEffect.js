

(function(){
    addLoadEvent(load_page);
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

function load_page() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadpage").style.display = "none";
    h2 = document.getElementsByName("h2");
    strek = document.createElement("div");
    let streken = document.createTextNode("");
    strek.appendChild(streken);
    h2.appendChild(strek);
}
