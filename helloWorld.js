var name = "Matthew Garcia";
var gitHub = "nirvanafan205";
var age = 22;

function whoAmI(name, nickname, age) {
  console.log(`Hi, Im ${name} (aka ${nickname}) , and Im ${age} years old `);
}

whoAmI(name, gitHub, age);

typeof 42; //number

typeof "Matthew"; //string

typeof true; //boolean

typeof undefined; //undefined

typeof { age: 39 }; //object

typeof null; //object

typeof [1, 2, 3]; //object
