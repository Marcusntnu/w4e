/*
FILE NAME: scripts/bildeGalleri.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: Slideshow for the gallery page
 */

//Referanser til HTML elementer
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideshowImg = document.getElementById("slideshowImg");
let imageContainer = document.getElementById("wrapperGalleri");
let overlayBack = document.getElementById("overlay-back");
let cover = document.getElementById("coverGalleri");

//Variabel for å holde filnavn og bildebesrkivelse.
let imageFileNames = [{
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
    if (i === imageFileNames.length - 1) {
        i = 0;
    } else {
        i++;
    }
    slideshowImg.src = "images/bildegalleri/" + imageFileNames[i].fileName;
};

/*Denne funksjonen er den motsatte av den forrige, da denne går bakover i bilder*/
prev.onclick = function (evt) {
    evt.preventDefault();
    console.log(slideshowImg);
    if (i === 0) {
        i = imageFileNames.length - 1;
    } else {
        i--
    }

    slideshowImg.src = "images/bildegalleri/" + imageFileNames[i].fileName;
};

function clickOverlay() {
    cover.innerHTML = "";
    cover.style.display = overlayBack.style.display = "none";
    cover.style.visibility = overlayBack.style.visibility = "hidden";
}

//Loop for å legge til alle bildene i filnavn-arrayet i HTMLen.
for (let i = 0; i < imageFileNames.length; i++) {
    let img = document.createElement("img");
    let y = document.createElement("div");
    let z = document.createElement("div");
    z.setAttribute("class", "imageGrid");
    img.setAttribute("id", i);
    img.setAttribute("class", "image");
    img.setAttribute("src", "images/bildegalleri/" + imageFileNames[i].fileName);
    img.setAttribute("alt", imageFileNames[i].description);
    y.setAttribute("class", "desc");
    y.innerHTML = imageFileNames[i].description;
    z.appendChild(img);
    z.appendChild(y);
    imageContainer.appendChild(z);

    let elem = document.getElementById(i.toString());
    elem.onclick = function () {
        let img = document.createElement("img");

        img.setAttribute("src", "images/bildegalleri/" + imageFileNames[this.id].fileName);
        img.setAttribute("id", "img" + imageFileNames[this.id]);
        img.setAttribute("onclick", "clickOverlay()");
        img.setAttribute("class", "coverImgGalleri");

        cover.appendChild(img);

        cover.style.display = overlayBack.style.display = "block";
        cover.style.visibility = overlayBack.style.visibility = "visible";
    }
}