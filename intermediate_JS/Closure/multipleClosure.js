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
