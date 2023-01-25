/*
    Closure is the most esoteric of JavaScript concepts

    Enables powerful pro-level functions like 'once' and 'memorize'

    Many JavaScript design patterns including the module pattern use closure

    Build iterators, handle partial application and maintain state in an asynchronous world


    Functions with memories

        When our functions get called, we create a live store of data (local memory/variable environment/state) for that functions execution context

        When the function finishes executing, its local memory is deleted (except the returned value)
        
        But what if our functions could hold on to live data between executions?

        This would let our function definitions have an associated cache/persistent memory

        but it all starts with us returning a function from another function
*/

//functions can be returned from other functions in JavaScript

//create function is made and stored in global memory
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

//generatedFunc is next that is made in global memory
const generatedFunc = createFunction(); // createFunction is called

const result = generatedFunc();
//generatedFunc has no relationship with createFunction
//it only consists of what it returns i.e multiplyBy2
