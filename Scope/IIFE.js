// IIFE : Imediatly invoked function expressions

var name = "Kyle";

//wrapping set of parenthesis makes it a function expression
(function anotherName() {
  var name = "Ayyylmao";
  console.log(name); //Ayyylmao
})(); //() imediatly invokes it

console.log(name);
