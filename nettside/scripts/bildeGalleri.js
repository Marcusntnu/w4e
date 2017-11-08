/*
FILE NAME: scripts/bildeGalleri.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: Slideshow for the gallery page
 */

//Referanser til HTML elementer
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideshow = document.getElementById("slideshow");
let imageContainer = document.getElementById("imageContainer");

//Variabel for å holde filnavn og bildebesrkivelse.
let imageFileNames = [
    {
        fileName: "1.jpg",
        description: "Nå er Mannhullets IPA fra IPA-off på tapp! Kom og kjøp før det blir tomt!"
    },
    {
        fileName: "2.jpg",
        description: "Sigurd Aurvåg Sørum"
    },
    {
        fileName: "3.jpg",
        description: "Sigurd Aurvåg Sørum, Andreas Bro Kolstø og Even Wollebæk Førrisdal"
    },
    {
        fileName: "4.jpg",
        description: "Gløshaugen Bryggeforum (1) foran Nidarosdomen!"
    },
    {
        fileName: "5.jpg",
        description: "Er det det at Haakon og Sigrid alene har blitt satt i spotligthen som utløser frustrasjonen? " +
        "Men Hvorfor er da Kristian så fornøyd?"
    },
    {
        fileName: "6.jpg",
        description: ""
    },
    {
        fileName: "7.jpg",
        description: ""
    },
    {
        fileName: "8.jpg",
        description: ""
    },
    {
        fileName: "9.jpg",
        description: "Maltet har kommet. \n" +
        "Lagres på samfundet. Kan hentes når det har blitt betalt for. Ta kontakt med " +
        "<a href='mailto:sampleEmail@domain.com'>Sigbjørn Albert</a>"
    },
    {
        fileName: "10.jpg",
        description: ""
    },
];

/*Funksjon for å bla til neste bilde i slideshowet.
Variablen I er en teller, som inkrementerer for hver gang brukeren trykker på knappen.
Når I er det samme som antall filnavn, skal den hoppe tibake til start*/
let i = 0;
next.onclick = function (evt) {
    evt.preventDefault();
    if(i === imageFileNames.length-1){
        i = 0;
    }else {
        i++;
    }
    slideshow.src = "images/bildegalleri/" + imageFileNames[i].fileName;
};

/*Denne funksjonen er den motsatte av den forrige, da denne går bakover i bilder*/
prev.onclick = function (evt) {
    evt.preventDefault();
    if(i === 0){
        i = imageFileNames.length-1;
    }else{
        i--
    }
    slideshow.src = "images/bildegalleri/" + imageFileNames[i].fileName;
};

//Åpner en ny fane med bildet når en bruker klikker på et bilde.
function imageClick(url) {
    let win = window.open(url, '_blank');
    win.focus();
}

//Loop for å legge til alle bildene i filnavn-arrayet i HTMLen.
for(let i = 0; i < imageFileNames.length; i++){
    let x = document.createElement("img");
    let y = document.createElement("div");
    let z = document.createElement("div");
    z.setAttribute("class", "imageGrid");
    x.setAttribute("id", i);
    x.setAttribute("class", "image");
    x.setAttribute("src", "images/bildegalleri/" + imageFileNames[i].fileName);
    x.setAttribute("alt", imageFileNames[i].description);
    x.setAttribute("onclick", "imageClick('http://localhost:63343/w4e/nettside/images/bildegalleri/" + imageFileNames[i].fileName + "')");
    y.setAttribute("class", "desc");
    y.innerHTML = imageFileNames[i].description;
    z.appendChild(x);
    z.appendChild(y);
    imageContainer.appendChild(z);
}