function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

//outputs 1 2 1 2
//each variable have different backbacks
// brand new back pack

const anotherFunction = out();
anotherFunction();
anotherFunction();

/*
    If we run 'outer again and store the returned 'incrementCounter' function
    definition in 'anotherFunction', this new incrementCounter function was created in 
    a new execution context and therefore has a brand new indepened backpack

*/

/*
    Closure gives our functions persistent memories and entirely new toolkit for writing professional code

        Helper functions: 'once' and 'memorize'

        iterators and generators: Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript

        Module pattern: Preserve state for the life of an application without polluting the globabl namespace

        Asynchronous JavaScript: Callbacks and Promises rely on closure to persist state in an asynchronous environment
*/
