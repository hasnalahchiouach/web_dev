var text = document.getElementById("inp");
var button = document.getElementById("butt");
var horloge = document.getElementById("horloge");
function event_click(e)
{
	text.value = "" ;
}
function start(e)
{
	changeHeure();
}
button.addEventListener("click",event_click);

text.addEventListener("keypress",start);


         function changeHeure()
            {
            var span = document.getElementById("horloge");
            if (span==null) return; 
            while (span.firstChild) span.removeChild(span.firstChild); 
            fStart();
            setTimeout(changeHeure, 1000);
            }

function afficheHeure()
{
	var newel  = document.createElement("span");
    var textnode = document.createTextNode("Hamza");
    newel.appendChild(textnode);
    horloge.appendChild(newel);
}
var setTm=0;
var tmStart=0;
var tmNow=0;
var tmInterv=0;
var nTime=0; //compteur des temps intermédiaires
function affTime(tm){ //affichage du compteur
   var vMin=tm.getMinutes();
   var vSec=tm.getSeconds();
   var vMil=Math.round((tm.getMilliseconds())/10); //arrondi au centième
   if (vMin<10){
      vMin="0"+vMin;
   }
   if (vSec<10){
      vSec="0"+vSec;
   }
   if (vMil<10){
      vMil="0"+vMil;
   }
   document.getElementById("horloge").innerHTML=vMin+":"+vSec+":"+vMil;
}
function fChrono(){
   tmNow=new Date();
   Interv=tmNow-tmStart;
   tmInterv=new Date(Interv);
   affTime(tmInterv);
}
function fStart(){
   
   if (tmInterv==0) {
      tmStart=new Date();
   } else { //si on repart après un clic sur Stop
      tmNow=new Date();
      Pause=tmNow-tmInterv;
      tmStart=new Date(Pause);
   }
   setTm=setInterval(fChrono,10); //lancement du chrono tous les centièmes de secondes
}
