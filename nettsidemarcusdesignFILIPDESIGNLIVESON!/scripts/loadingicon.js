

let parent = document.getElementById("page");

let loading = "<div id='loadpage'></div>" + "<div id='loader'></div>";

let page = document.getElementById("page");

parent.insertBefore(loading, page);
parent.innerHTML += loading;
document.body.appendChild(loading);
