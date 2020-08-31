function ebin() {
    var karvo = parseInt(document.getElementById('inputti').value);
    var jono = "";
    for(var i = 2; i <= karvo; i= i+2)
    {
      jono+=i;
      jono+=" ";
    }
      document.getElementById('parilliset').innerHTML = jono;
}
function sal() {
  var inp = document.getElementById('inp2').value;
  var pp = "";
  for(var j = 0; j < inp.length; j++) {
    pp += inp[j] + 'Ö';
  }
  document.getElementById('ok').innerHTML = pp;
}
function Oooo() {
  var onko = document.getElementById('kissa').value;
  var on = 'ei ole';
  for(var k = 0; k < onko.length; k++)
  {
    if(onko[k] == 'ö' || onko[k] == 'ö')
    {
      on = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + on + '</p>';
}
function lask() {
  var kerr = document.getElementById('luku1').value;
  var las = 1;
  for(var z = 1; z <= kerr; z++) {
    las*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = 'Luvun ' + kerr + ' kertoma on '+las ;
}
function tul()
{
  var tul = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tul+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tul+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tul+='Hip ';
    }
    else {
      tul+=y+' ';
    }
    document.getElementById('luk').innerHTML = tul;
  }
}
function ok() {
  var num = '';
  for(var e = 1; e <=10; e++)
  {
    num += e + ' ';
  }
  document.getElementById('10luku').innerHTML =  num;
}
function oklask() {
  yht = 0;
  for(var y = 1; y <=10; y++)
  {
    yht += y;
  }
  document.getElementById('10lukuyht').innerHTML = yht;
}
function oklask2() {
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('luktul').innerHTML = yht;
}
function supi() {
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('tult').innerHTML = 'Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
function muokkaaSalasana() {
  var pw = '';
  var eka, toka;
  pw = document.getElementById('sali').value;
  alert(pw);
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    temp.push(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.getElementById('tutlti').innerHTML = lop;
}
function isopuienio() {
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('isompi').value);
  nro2 = document.getElementById('pienenmpi').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('tulostus').innerHTML = 'Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma;
  document.getElementById('tulostus2').innerHTML =  'Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '';
}