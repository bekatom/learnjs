// ფუნქციის გადაცემა როგორც პარამერად.

function say(word){
	console.log(word);
}

function execute(someFunction,value){
	someFunction(value);
}

// აქ გადავცემთ ფუნქცია "say" როგორც პირველ პარამეტრს ფუნქცია "execute"-ს
// რომელიც აბრუნებს თვითონ ფუნქცია "say"-ს .
execute(say,'Hello');  