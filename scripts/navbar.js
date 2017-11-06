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
      "    <li><a href=\"https://www.google.no\">This</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"page.cfm\">And</a>\n" +
      "    </li>\n" +
      "\n" +
      "    <li><a href=\"page.cfm\">And</a>\n" +
      "    </li>\n" +
      "    <li>\n" +
      "\n" +
      "        <img id=\"logo\" src=\"images/gjennomsiktiglogoOutlineWithShadow.png\">\n" +
      "\n" +
      "    </li>\n" +
      "\n" +
      "    <li><a href=\"page.cfm\">That</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"page.cfm\">Here</a>\n" +
      "    </li>\n" +
      "    <li><a href=\"page.cfm\">There</a>\n" +
      "    </li>\n" +
      "</ul>"
};