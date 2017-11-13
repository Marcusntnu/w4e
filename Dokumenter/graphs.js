google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var operativSystemData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Windows',     16],
        ['Mac OSX',      1],
        ['Android',  3],
        ['iOS (iPhone)', 5],
        ['Ubuntu',    1],
        ['Linux',    1]
    ]);



    draw("operativSystemGraph","Hvilket operativsystem bruker du? (27 svar)",operativSystemData);

    var tabletData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Ja',     1],
        ['Nei',      26]
    ]);


    draw("tabletGraph","Bruker du tablet? (27 svar)",tabletData);


    var nettleserData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Chrome',     21],
        ['Safari',      5],
        ['Mozilla Firefox',  0],
        ['Opera', 0],
        ['Vivaldi',    0],
        ['Internet Explorer',    2]
    ]);


    draw("nettleserGraph","Hvilken nettleser bruker du? (27 svar)",nettleserData);

    var sletDuColumnData = google.visualization.arrayToDataTable([
        ['Vanskelighet (1-5)', 'Antall' ],
        ['Lett', 18],
        ['Litt lett', 6 ],
        ['Middels', 3 ],
        ['Litt vanskelig', 0 ],
        ['Vanskelig', 0 ]
    ]);

    drawColumn("sletDuColumn","Slet du med å finne frem på siden? (27 svar)",sletDuColumnData);


    var sletDuColumnData = google.visualization.arrayToDataTable([
        ['Vanskelighet (1-5)', 'Antall' ],
        ['Lett', 16],
        ['Litt lett', 4 ],
        ['Middels', 5 ],
        ['Litt vanskelig', 1 ],
        ['Vanskelig', 0 ]
    ]);

    drawColumn("vanskeligALese","Hvor vanskelig var det å lese innholdet på siden? (26 svar)",sletDuColumnData);

    var layoutGraphData = google.visualization.arrayToDataTable([
        ['', 'Antall' ],
        ['1', 0],['2', 0],['3', 2],['4', 4],['5', 2],['6', 2],['7', 2],['8', 4],['9', 5],['10', 3]
    ]);

    drawColumn("layoutGraph","Hvor godt likte du layouten til siden? (24 svar)",layoutGraphData);



    var bryggeLaugData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Ja, jeg trykket og det virket',     20],
        ['Ja, jeg trykket, det virket dårlig',      2],
        ['Nei, jeg trykket ikke',  5],
    ]);


    draw("bryggeLaugGraph","Trykket du på noen av bryggelaugene for mer informasjon? Virket dette? (27 svar)",bryggeLaugData);



    var lesePaTabletMobilData = google.visualization.arrayToDataTable([
        ['Vanskelighet (1-5)', 'Antall' ],
        ['Lett', 9],
        ['Litt lett', 5 ],
        ['Middels', 2 ],
        ['Litt vanskelig', 0 ],
        ['Vanskelig', 0 ]
    ]);

    drawColumn("lesePaTabletMobil","(For mobil/tablet) Hvor lett var det å lese teksten på siden? (16 svar)",lesePaTabletMobilData);




    var lastetSidenMobilTabletData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Ja, den lastet korrekt',     13],
        ['Nei, den lastet ikke korrekt',      2]
    ]);


    draw("lastetSidenMobilTablet","(For mobil/tablet) Lastet siden korrekt? Så det rart ut? (15 svar)",lastetSidenMobilTabletData);


    var bildeneBildegalleriMobilTabletData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Det funket',     8],
        ['Det funket dårlig',      2],
        ['Prøvde ikke',      5]
    ]);


    draw("bildeneBildegalleriMobilTablet","(For mobil/tablet) Prøvde du å trykke på bildene i bildegalleriet eller på bryggelaug siden? Funket dette? (15 svar)",bildeneBildegalleriMobilTabletData);




    var langTidALasteData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Ja',     26],
        ['Nei',      1],
    ]);


    draw("langTidALaste","(For mobil/tablet) Brukte noen eller alle av sidene lang tid på å laste? (Svar gjerne med hvilke sider) (27 svar)",langTidALasteData);




    var seriosSideData = google.visualization.arrayToDataTable([
        ['', ''],
        ['Ja',     22],
        ['Nei',      4],
    ]);


    draw("seriosSide","Virker dette som en seriøs nettside? (26 svar)",seriosSideData);


}


function draw(id,title, data){
    var chart = new google.visualization.PieChart(document.getElementById(id));

    chart.draw(data, {title:title});
}
function drawColumn(id,title, data){
    var chart = new google.visualization.ColumnChart(document.getElementById(id));

    chart.draw(data, {title:title});
}
