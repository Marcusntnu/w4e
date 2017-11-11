function loadNavbar() {
    let navbar = document.getElementById("navbar");

    /* navbar.innerHTML =
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

         "</ul>";*/

    navbar.innerHTML = "<p id=\"oel\"></p>\n" +
        "            <div class=\"navWide\">\n" +
        "                <div class=\"wideDiv\">\n" +
        "                    <a href=index.html>Hjem</a>\n" +
        "                    <a href=\"om.html\">Om oss</a>\n" +
        "                    <a href=\"bryggeguide.html\">Bryggeguide</a>\n" +
        "                    <a href=\"beregninger.html\">Beregninger og tabeller</a>\n" +
        "                    <a href=\"bildegalleri.html\">Bildegalleri</a>\n" +
        "                    <a href=\"bryggelaug.html\">Bryggelaug</a>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"navNarrow\" >\n" +
        "                <i class=\"fa fa-bars fa-2x\"></i>\n" +
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
    navLinks.addEventListener('click', toggle);

    function toggle() {
        narrowLinks.classList.toggle('hidden');
    }

}

loadNavbar();