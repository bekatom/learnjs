//https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

var MyReallyCoolLibrary = {


	awesome  : "stuf",
	doSomething : function(){

		console.log("this is methd doSomething");
	},

	doAnotherSthing : function(){

		console.log("this is doAnotherthing method");
	}


};


// TO check your MyReallyCoolLibrary
// console.log(MyReallyCoolLibrary);

window.cool = MyReallyCoolLibrary;  // save in global variable 
console.log(cool.doSomething());    // execute method in mycool library


