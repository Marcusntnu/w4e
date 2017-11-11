/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
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
        "<div id = \"scroll\">"+
        "</div>"+

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
        "</ul>" +
    "   <div class=\"navNarrow\" >\n" +
    "                <i class=\"fi fo-bars fum\"></i>\n" +
    "                <div class=\"narrowLinks hidden\" >\n" +
    "                    <a href=index.html>Hjem</a>\n" +
    "                    <a href=\"om.html\">Om oss</a>\n" +
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

}

console.log("loadNavbar");
addLoadEvent(loadNavbar);
console.log("end");

