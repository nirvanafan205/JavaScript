//calling a function outside of the function call in which it was defined

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

//persistent lexical scope  refrenced data

//closed over Variable Environment

/*
    The closure of live data is attached incrementCounter (then to myNewFunction) through a hidden property
    known as [[scope]] which persists when the inner function is returned out
*/
