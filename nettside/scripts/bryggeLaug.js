let content = document.getElementById("content");


//Objekt over alle bryggelaugene i Gløshaugen bryggeforum
let bryggelaug = [{
        name: "Ontap",
        linjeforening: "Online",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 33,
        logo: "ontap.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Invitro",
        linjeforening: "Volvox&Alkymisten",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 5,
        logo: "invitro.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "AarhøneKroa Pikobryggeri",
        linjeforening: "Aarhønen",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 123456,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 6,
            epost: "test@test.no"
        },
    },

    {
        name: "Delta Bryggelaug",
        linjeforening: "Delta",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 15,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Indøk Ølbryggelaug",
        linjeforening: "Janus",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 11,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Maskins BrüggeCom",
        linjeforening: "Smørekoppen",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 123456,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Omega Haandbrygercommitée",
        linjeforening: "Omega",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 12,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Nanobryggeriet",
        linjeforening: "Timini",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 6,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Ølkom",
        linjeforening: "Emil",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 123456,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Nablas Ølbryggerlaug",
        linjeforening: "Nabla",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 39,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Ababrygg",
        linjeforening: "Abakus",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 45,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "CHØLeSCAB",
        linjeforening: "Mannhullet",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 25,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "Fylkesbrygg",
        linjeforening: "Emil",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 4,
        logo: "aarhønen.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },
];


function clickLaug(target) {

}


for (let i = 0; i < bryggelaug.length; i++) {
    let img = document.createElement("img");
    let div = document.createElement("div");
    img.setAttribute("class", "bryggelaugImg");
    img.setAttribute("id", bryggelaug[i].name + "Img");
    img.setAttribute("src", "images/bildegalleri/1.jpg");
    div.setAttribute("class", "bryggelaugDiv");
    div.setAttribute("id", bryggelaug[i].name + "Div");
    div.appendChild(img);
    content.appendChild(div);
}