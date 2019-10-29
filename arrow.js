/*function f1() {
	var a ="bonjour";
	function f2 (){
		console.log(a);
	}	
	return f2;
}

var f = f1();
f();
*/

/*const func1 = () => {
	var a = "bonjour";
	const func2 = () => {
		console.log(a);
	}
	return func2;
}

var ff = func1();
ff();
*/

/*const prod1=(a,b) => a*b;
prod1(3,4);

const prod2 = (a) => (b) => a*b;
prod2(3);
prod2(3,4);
*/
/*
const comp = (f,g) => (a) => f(g(a));
let somme = (n) => n+1;

console.log(comp(somme,somme)(3));
*/
const a = [1,4,3,8];
let b = a.forEach((n)=> {
	n*2;
});

console.log(b);
let b = 
