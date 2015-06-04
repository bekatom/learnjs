console.log("funtion vs block scope");

function foo(a) {

    var b = 2;


    function bar() {

    }

    var c = 3;


}


function doSomething(a) {
    function doSomethingElse(a) { // a will be 4
    	
        return a - 1;  // returs 3
    }

    var b;

    b = a + doSomethingElse(a * 2); // b = 2 + 3
    console.log(b);
    console.log((b * 3)); //5 * 3
}

console.log(doSomething(2)); // 15

