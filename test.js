/*const fig=document.querySelector('.maFig');
const img=fig.querySelector('.monImg');
var text=img.getAttribute('alt');
var element=document.createElement("hasna");
var elementText=document.createTextNode(text);
element.appendChild(elementText);
fig.appendChild(element);
console.log(fig);*/
/*
var elem=document.querySelector('.normal');
function event_click(e){
	console.log("click");
	elem.classList.toggle("normal");
}

elem.onclick=event_click;*/

var elem=document.querySelector('body');
var elem1=document.querySelector('circle');

function event_click(e){
	elem1.setAttribute('cx',e.clientX);
	elem1.setAttribute('cy',e.clientY);
}

elem.addEventListener("mousemove",event_click);

