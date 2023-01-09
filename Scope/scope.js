//scope: where to look for things

var name = "Matthew";

function otherClass() {
  teacher = "Suzy";
  topic = "React"; //creates a variable in the global scope

  console.log("Welcome!");
}

otherClass(); // Welcome!

teacher; // Suzy
topic; // React

console.log(topic);
