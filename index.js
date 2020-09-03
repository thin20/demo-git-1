var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse("Mickey");
var dog = new Dog();

cat.eat(mouse);

console.log(cat);
try {
	cat.eat(dog);
} catch(e) {
	console.log('Error while cat eating a dog');
}

console.log(cat);