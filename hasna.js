/*let h=5;
let l=6;
let k=h+l;
console.log(`votre age 
	est ${k}`);
let a = prompt("Votre note : ");
Number.parseInt(a);
if(a<0) console.log("note invalide");
else if(a<10)
console.log("redoublant");
else if(a<12)``
console.log("passable");
else if(a<14)
console.log("Assez bien");
else if(a<16)
console.log("Bien");
else if(a<=20)
console.log("Tres Bien");
else
console.log(" invalide");
*/

/*function somme (hasna , hamza ){
	if(Number.isInteger(hasna)&& Number.isInteger(hamza)) return hasna+hamza ;
}

let r=prompt("donnez le prem nmbr");
let ab = prompt("donnez le deux nmbr");
r=Number.parseInt(r);
ab=Number.parseInt(ab);
console.log(somme(r,ab));
*/
/*
 let H = function(d,c)
 {
 	return d+c;
 }
 
console.log(H(1,5));

(function(d,c){
    alert(d+c);
})(4,6);
*/
/*let personne = {
	nom : "hasna",
	age : 22,
	direHi : function(){
		console.log("hasna");
	},
}
personne.direHi();

personne.taille=45;
console.log(personne.taille);


function user(nom,prenom)
{
	this.nom=nom;
	this.prenom=prenom;
	direHi = function(){
		console.log(this.nom);
	};
}

let per= new user("hasna","lahchiouach");
console.log(per);

user.prototype.taille=40;
console.log(per);

user.prototype.dirSalam= function(){console.log("Salam")};
per.dirSalam();*/
/*function Vecteur(x,y)
{
	this.x=x;
	this.y=y;
};
Vecteur.prototype.mod=function(){
	return Math.sqrt(this.x**2+this.y**2);
}
Vecteur.prototype.egale=function(v){
	return this.x==v.x && this.y==v.y;
}*/

class Vecteur
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
	}
	mod(){
		return Math.sqrt(this.x**2+this.y**2);
	}
	egale(v){
		return this.x==v.x && this.y==v.y;
	}
}
let v1= new Vecteur(1,2);
let v2= new Vecteur(3,4);
console.log(v1.mod());
console.log(v1.egale(v2));