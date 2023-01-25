/*
    Functions in javascript = first lass objects

    They can co-exist with and can be treated like any other javascript object

        Assigned to variables and properties of other objects

        Passed as arguments into functions

        Returned as values from functions
*/

//this is the higher order function
//outer function that takes in a function is our higher order function
function copyArrayAndManipulate(array, instructions) {
  const output = []; // creates an empty array

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); //gett's multiplication
  }
  return output; // returns output
}

function multiplyBy2(input) {
  // this is our callback function
  return input * 2;

  //the function we insert is our callback function
}

const answer = copyArrayAndManipulate([1, 2, , 3], multiplyBy2);

/*
    Higher order functions

    Takes in a function or passes out a function

    just a term to describe these function - any function that does it we call that 
    but theres nothing different about them inherently
*/

/*
    Callbacks and Higher Order Functions simplify our code and keeps it DRY

    Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data

    Codesmith and pro interview prep: One of the most popular topics to test in interview both Codesmith and mid/senior level job interviews

    Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are under=the-hood of promises, asnyc/await
*/
