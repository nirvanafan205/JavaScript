/* 
    Closure is when a function "remembers" the variables
    outside of it, even if you pass that function elsewhere
*/

// waitASec function allows question variable to
//not be thrown in garbage collector
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is closure?");

function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is closure?");

myQuestion(); //what is closure?
