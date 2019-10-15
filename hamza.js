var query = document.querySelector('#menu .item span');
var	queryAll = document.querySelectorAll('#menu .item span');


console.log(query.innerHTML);
console.log(queryAll.length);
console.log(queryAll[0].innerHTML);
console.log(queryAll[1].innerHTML);


var hasna = document.querySelector('#menu div');
console.log(hasna.id);
console.log(hasna.attributes);
var h = document.querySelector('#menu .publicite span' );
h.classList.remove("blue");
h.classList.add("green");
