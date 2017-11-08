let content = document.getElementById("content");


//Objekt over alle bryggelaugene i Gløshaugen bryggeforum
let bryggelaug = [{
        name: "Ontap",
        linjeforening: "Online",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 33,
        logo: "ontap.png",
		leder: "Aslak Hollund",
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
        logo: "invitro.png",
		leder: "Charlie Shea",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "AarhøneKroa Pikobryggeri",
        linjeforening: "Aarhønen",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 6,
        logo: "aarhonekroa.png",
		leder: "Sondre Evjen",
        kontaktinfo: {
            telefon: 12345678,
            epost: "test@test.no"
        },
    },

    {
        name: "Delta Bryggelaug",
        linjeforening: "Delta",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 15,
        logo: "sample.jpg",
		leder: "Martin Madsen",
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
        logo: "sample.jpg",
		leder: "Marius Hofgaard",
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
		leder: "Ola Nordmann",
        logo: "sample.jpg",
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
		leder: "Nicholas Fraser Ødegård",
        logo: "sample.jpg",
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
        logo: "sample.jpg",
		leder: "Leik Isdal",
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
        logo: "sample.jpg",
		leder: "Ola Nordmann",
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
        logo: "sample.jpg",
		leder: "Camilla Idina Elvebakken",
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
        logo: "sample.jpg",
		leder: "Vemdund Santi",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },

    {
        name: "CHØLeSCAB",
        linjeforening: "Høiskolens Chemikerforening",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 12,
        logo: "sample.jpg",
		leder: "Henrik Kiær",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        },
    },
	
	{
        name: "Mannhullet",
        linjeforening: "Mannhullet",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 25,
        logo: "mannhullet.jpg",
		leder: "Ola Nordmann",
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
    img.setAttribute("src", "images/Logoer/"+bryggelaug[i].logo);
    div.setAttribute("class", "bryggelaugDiv");
    div.setAttribute("id", bryggelaug[i].name + "Div");
    div.appendChild(img);
    content.appendChild(div);
}