var etuNimi = 'Anssi';
var sukuNimi = 'Hahtiperä';
var ika = '16';

alert('Hei nimeni on ' + etuNimi + ' ' + sukuNimi + ' Olen ' + ika + ' vuotta vanha');

function funktio() {
    alert('Hei nimeni on ' + etuNimi + ' ' + sukuNimi + ' Olen ' + ika + ' vuotta vanha ja asun Mäntsälässä/ Järvenpäässä');

  }

function funktio2 () {
    document.getElementById("vast1").innerHTML = "Vastaus on väärin";
}
function funktio3 () {
    document.getElementById("vast2").innerHTML = "Vastaus on väärin";
}
function funktio4 () {
    document.getElementById("vast3").innerHTML = "Vastaus on oikein";
    document.getElementById("gz").innerHTML = "Onnittelut olet hyvä<br> matikassa";
}


var eka, toka, summa;
eka = 11;
toka = 15;
summa = eka + toka;
alert(summa);

function laskeMin()
{
    var min, tun, laske;
    tun = document.getElementById('tunnit').value;
    min = document.getElementById('minuutit').value;
    tun = parseInt(tun);
    min = parseInt(min);
    laske = tun*60 + min;
    document.getElementById('nappitulo').innerHTML = "Tähän mennessä minuutteja kulunut tässä päivässä:" + laske;
}

function aikaT()
{   
    var aika = new Date();
    var hours = aika.getHours();
    var mins = aika.getMinutes();
    var secs = aika.getSeconds();
    document.getElementById('aika').innerHTML = hours+":"+mins+":"+secs;
    setInterval(aikaT,1000)
}
