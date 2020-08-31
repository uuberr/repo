function munfunktio(){
    event.preventDefault();
    var num=new Array();
    num[0]=document.getElementById("eka").value;
    num[1]=document.getElementById("toka").value;
    num[2]=document.getElementById("kolm").value;
    num.sort((a,b)=>Number(a)>=Number(b)?1:-1)
    document.getElementById('tes').innerHTML = "Lukujen oikea järjestys on " + num ;
}
function max(){
    

    var arr = new Array();
    arr[0] = parseInt(document.getElementById("num1").value);
    arr[1] = parseInt(document.getElementById("num2").value);
    arr[2] = parseInt(document.getElementById("num3").value);
    arr[3] = parseInt(document.getElementById("num4").value);
    arr[4] = parseInt(document.getElementById("num5").value);

    document.getElementById("tes2").innerText = "Isoin luku on " +Math.max(...arr);
}
function par()
{
    document.getElementById('tes3').innerText = ((parseInt(document.getElementById('par1').value) % 2 == 0) ? 'Kyllä' : 'Ei');
}
function kortti()
{
    var ika = document.getElementById('partti1').value;
    if(ika < 15)
    {
      document.getElementById('tes4').innerHTML = " Saat ajaa fillarilla";
    }
    else if(ika > 15 && ika < 18)
    {
      document.getElementById('tes4').innerHTML = "Saat ajaa mopoa";
    }
    else {
      document.getElementById('tes4').innerHTML = "Saat ajaa autoa";
    }
}
function kieli()
{
  var lang = document.getElementById('partti2').value;
  if(lang == 'eng')
  {
    document.getElementById('tes5').innerHTML = "Hello world!";
  }
  else if(lang == 'swe')
  {
    document.getElementById('tes5').innerHTML = "Hej världen!";
  }
  else {
    document.getElementById('tes5').innerHTML = "Hola Mundo!";
  }
}