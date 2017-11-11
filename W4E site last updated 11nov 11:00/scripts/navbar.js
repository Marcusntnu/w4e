/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */


/*
document.getElementById("myDropdown").innerHTML =
    "<a href=index.html>Hjem</a>" +
    "<a href=\"om.html\">Om oss</a>" +
    "<a href=\"bryggeguide.html\">Bryggeguide</a>" +
    "<a href=\"beregninger.html\">Beregninger og tabeller</a>" +
    "<a href=\"bildegalleri.html\">Bildegalleri</a>" +
    "<a href=\"bryggelaug.html\">Bryggelaug</a>"
;*/

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



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

