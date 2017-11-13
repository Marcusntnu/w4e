
/*Kaller funksjonene load_page og parallex når websiden er ferdig loaded*/
addLoadEvent(load_page);
addLoadEvent(parallex);

/*Kaller parallex funksjonen når brukeren scroller*/
window.onscroll = parallex;


/*Gjør parallex effekten, tatt fra David fra https://stackoverflow.com/questions/15657199/parallax-scrolling*/
function parallex() {

    let parallax2 = document.querySelectorAll("body"),
        speed = 0.5;
    [].slice.call(parallax2).forEach(function (el, i) {

        let windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

    });
}

/*ingenting å gjøre med parallex effekten men den fjerner loading skjermen når websiden er ferdig loaded*/
function load_page() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadpage").style.display = "none";
    document.getElementById("footer").style.display = "block";
}