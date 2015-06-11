var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', 
	{ name: String }
	);

var kitty = new Cat({ name: 'Zildjian' });
var mycat  = new Cat( {
	name : 'miu',
	color : 'black'
});




// save into mongo database
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
 
});

mycat.save(function(err){

});

console.log("..........................")