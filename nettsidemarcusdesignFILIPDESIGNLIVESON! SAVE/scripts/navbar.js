/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Filip Østervold Tangen
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */


  //Innholdet i elementet med id = "navbar" skal byttes ut med navbaren
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function loadNavbar(){
    let navbar = document.getElementById("navbar");

    navbar.innerHTML =
        "<p id=\"oel\"></p>" +
        "<ul class=\"navt\">\n" +
        "\n" +
        "\n" +

        "    <li><a href=\index.html\>Hjem</a>\n" +
        "    </li>\n" +
        "    <li><a href=\"om.html\">Om oss</a>\n" +
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

        "</ul>";


}

console.log("loadNavbar");
addLoadEvent(loadNavbar);
console.log("end");



