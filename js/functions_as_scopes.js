var a = 2;


console.log("Function as Scopes ======");

(function fn_exec(){

	var a = 3 ;
	console.log(a);
})();

console.log(a);




console.log("End of Functions as Scopes");