function aikaT()
{   
    var aika = new Date();
    var days = aika.getDate();
    var hours = aika.getHours();
    var mins = aika.getMinutes();
    var secs = aika.getSeconds();
    document.getElementById('aika').innerHTML = days+":"+hours+":"+mins+":"+secs;
    setInterval(aikaT,1000)
}

var selected;

function edit(){
    document.getElementById(selected).innerText = "Ei vapaa";
    console.log(selected)
}
function unedit(){
    document.getElementById(selected).innerText = "Vapaa";
}







function klikkiopen3(date, el){
    selected = date+"pop";
    console.log(selected);
    if (el.querySelector("span") == null){
       var span = document.createElement("span");
       span.setAttribute("class", "popuptext")
       span.setAttribute("id", date+"pop")
       span.innerHTML = "Vapaa";
       el.addEventListener("click", (e) => {
           span.classList.toggle("show");         

       })
       el.append(span);
       span.classList.toggle("show");
     }
}
var els = document.querySelectorAll(".trs");
var els2 = [];
for (var i = 0; i < els.length; i++){
    for (var j = 0; j < els[i].childNodes.length; j++){
        els2.push(els[i].childNodes[j])
    }
}

els2.forEach(element => {
    element.addEventListener("click", (e) => {
        element.setAttribute("class", "popup");
        klikkiopen3(element.innerText, element);

    }) 
});