// function as a parameter 

function say(word){
	console.log(word);
}

function execute(someFunction,value){
	someFunction(value);
}

// first version , pass "say"" function as first parameter to function execute . 
// that returns function "say"
execute(say,'Hello');  

// second version function as a parameter
execute(function(word){ console.log('Function as a parameter + : ', word)},"Hello2");