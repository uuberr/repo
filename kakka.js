
function vertaus()
{
    var eka1, toka2;
    eka1 = parseInt(document.getElementById('eka').value);
    toka2 = parseInt(document.getElementById('toka').value);
    if(eka1 > toka2)
     {
        document.getElementById('kk').innerHTML = eka1 + " on isompi kuin " + toka2;
    }
    else 
    {
        document.getElementById('kk').innerHTML = toka2 + " on isompi kuin " + eka1;
    }
}


function laske()
{
    var eka1, toka2;
    eka1 = parseInt(document.getElementById('eka').value);
    toka2 = parseInt(document.getElementById('toka').value);
    var value = parseInt(eka1,10) + toka2;
    document.getElementById('kk').innerHTML ="Tulos on : "+ value;
}

function kertominen()
{
    var eka1, toka2;
    eka1 = parseInt(document.getElementById('eka').value);
    toka2 = parseInt(document.getElementById('toka').value);
    document.getElementById('kk').innerHTML ="Tulos on : "+ eka1 * toka2
}

function jako()
{
    var eka1, toka2;
    eka1 = parseInt(document.getElementById('eka').value);
    toka2 = parseInt(document.getElementById('toka').value);
    document.getElementById('kk').innerHTML ="Tulos on : "+ eka1 / toka2
}