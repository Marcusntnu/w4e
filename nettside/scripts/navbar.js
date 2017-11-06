/*
FILE NAME: scripts/navbar.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: store the navbar for use on all pages
 */

window.onload = function () {
  let navbar = document.getElementById("navbar");

  navbar.innerHTML = "<ul class=\"navt\">\n" +
      "\n" +
      "\n" +
      "    <li><a href=\index.html\">Hjem</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"om.html\">Om oss</a>\n" +
      "    </li>\n" +
      "\n" +
      "    <li><a href=\"bryggelaug.html\">Bryggelaug</a>\n" +
      "    </li>\n" +
      "    <li>\n" +
      "\n" +
      "        <img id=\"logo\" src=\"images/gjennomsiktiglogoOutlineWithShadow.png\">\n" +
      "\n" +
      "    </li>\n" +
      "\n" +
      "    <li><a href=\"beregninger.html\">Beregninger og tabeller</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"bildegalleri.html\">Bildegalleri</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"bryggeguide.html\">Bryggeguide</a>\n" +
      "    </li>\n" +
      "</ul>"
};