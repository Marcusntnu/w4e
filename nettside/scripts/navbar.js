/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */


//Tar en funksjon og gjør slik at den blir kallet når websiden er ferdig loaded.
//Funksjonen gjør det mulig å kalle flere funksjoner, ikke bare en slik window.onload gjør.
//Ofte brukt kode, finnes mange projekter som bruker den.
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
//Loader navbaren via DOM
function loadNavbar() {
    let navbar = document.getElementById("navbar");

    navbar.innerHTML =
        "<div id = \"scroll\">" +
        "</div>" +

        "<p id=\"oel\"></p>" +
        "<ul class=\"navt\">\n" +
        "\n" +
        "\n" +

        "    <li><a href=\index.html\>Hjem</a>\n" +
        "    </li>\n" +
        "    <li><a href=\"bliMedlem.html\">Bli medlem</a>\n" +
        "    </li>\n" +
        "\n" +
        "    <li><a href=\"bryggeguide.html\">Bryggeguide</a>\n" +
        "    </li>\n" +
        "    <li>\n" +
        "\n" +

        "\n" +
        "    </li>\n" +
        "\n" +
        "    <li><a href=\"beregninger.html\">Beregninger og tabeller</a>\n" +
        "    </li>\n" +
        "    <li><a href=\"bildegalleri.html\">Bildegalleri</a>\n" +
        "    </li>\n" +
        "    <li><a href=\"bryggelaug.html\">Bryggelaug</a>\n" +
        "    </li>\n" +
        "</ul>" +

        "   <div class=\"navNarrow\">\n" +
        "                <img src='images/hamburger_icon.png' id='menyLogo' onclick='fjernmeny()'><p id=\"menytekst\">Meny</p></img>\n" +
        "                <div class=\"narrowLinks hidden\" >\n" +
        "                    <a href=index.html>Hjem</a>\n" +
        "                    <a href=\"bliMedlem.html\">Bli medlem</a>\n" +
        "                    <a href=\"bryggeguide.html\">Bryggeguide</a>\n" +
        "                    <a href=\"beregninger.html\">Beregninger og tabeller</a>\n" +
        "                    <a href=\"bildegalleri.html\">Bildegalleri</a>\n" +
        "                    <a href=\"bryggelaug.html\">Bryggelaug</a>\n" +
        "                </div>\n" +
        "            </div>";


    let navLinks = document.querySelector('.navNarrow');
    let narrowLinks = document.querySelector('.narrowLinks');

    navLinks.addEventListener('click', toggler);

    function toggler() {
        narrowLinks.classList.toggle('hidden');

    }
    document.getElementById("menytekst").style.display = "block";
}


addLoadEvent(loadNavbar);



function fjernmeny() {
    let menytekst = document.getElementById("menytekst");
    if (menytekst.style.display === "block") {
        menytekst.style.display = "none";
    } else {
        menytekst.style.display = "block";
    }
}