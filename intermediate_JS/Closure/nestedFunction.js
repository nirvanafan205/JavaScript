//calling a function in the same function call as it was defined

//outer function is defined in global memory
function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  incrementCounter();
}

//outer function is then executed
outer();
