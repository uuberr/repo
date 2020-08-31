function tarkistusnappi() {
    var inp = parseInt(document.getElementById('num').value);
    if (inp >= 0) {
        document.getElementById('tes').innerHTML = 'Numerosi on positiivinen'
    }
    else {
        document.getElementById('tes').innerHTML = 'Numerosi on negatiivinen'
    }
}
function paiva() {
    var days = document.getElementById('pp').value;
    if (days == 1) {
        document.getElementById('tes22').innerHTML = 'On maanantai'
    }
    else if (days == 2) {
        document.getElementById('tes22').innerHTML = 'On tiistai'
    }
    else if (days == 3) {
        document.getElementById('tes22').innerHTML = 'On keskiviikko'
    }
    else if (days == 4) {
        document.getElementById('tes22').innerHTML = 'On torstai'
    }
    else if (days == 5) {
        document.getElementById('tes22').innerHTML = 'On perjantai'
    }
    else if (days == 6) {
        document.getElementById('tes22').innerHTML = 'On lauantai'
    }
    else if (days == 7) {
        document.getElementById('tes22').innerHTML = 'On sunnuntai'
    }
    else {
        document.getElementById('tes22').innerHTML = 'Luku ei ole viikonpv'
    }
}
function kark() {
    var inp = document.getElementById('kRK').value;
    var karkk = "On karkausvuosi";
    var eikarkk = "Ei ole karkausvuosi";
    if(inp%4 == 0 && inp%100 != 0) {
        document.getElementById('tes3').innerHTML = karkk
    }
    else if(inp%400 ==0) {
    document.getElementById('tes3').innerHTML = karkk;
    }
    else {
    document.getElementById('tes3').innerHTML = eikarkk;
    }
}
function laskin() {
    var num1, num2, num3, num4, num5, tulos, kesk;
    num1 = parseInt(document.getElementById('numero1').value);
    num2 = parseInt(document.getElementById('numero2').value);
    num3 = parseInt(document.getElementById('numero3').value);
    num4 = parseInt(document.getElementById('numero4').value);
    num5 = parseInt(document.getElementById('numero5').value);
    tulos = num1 + num2 + num3 + num4 + num5;
    kesk = tulos / 5;
    if(tulos >= 1) {
        document.getElementById('tes4').innerHTML = "Summa on " + tulos + " ja keskiarvo on " + kesk;
    }
    else {
        document.getElementById('tes4').innerHTML = "Syötä jokaiseen kohtaan numero";
    }
}
function kertotau() {
    let numero = parseInt(document.getElementById('taul').value)
    for(let i = 0; i <= 10; i++) {
        tulos = i * numero;
        document.getElementById('tes5').innerText += `${numero} x ${i} = ${tulos}`+"\n";
    }
}
