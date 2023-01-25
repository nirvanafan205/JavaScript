const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);

const newOutput = multiplyBy2(10);

/* 
    When javaScript code runs, it :

    Goes through the code line-by-line and runs/ executes
    each line konwn as the thread of execution

    saves data like strings and arrays
    so we can use that data later in its memory

    we can even save code (functions)
*/

/*
    Functions:
        Code we save functions and can use later with the functions name and ()

        Execution context:
            Created to run the code of a function - has 2 parts

                thread of execution //77777777777777777777777777777777777777777777777777777777777777777----------------------------
                Memory //local memory
*/

/*
    call stack

        JavaScript keeps track of what function is currently running (where's the thread of execution

        Run a function - add to  all stack

        finishes running the function - JS removes it from call stack

        Whatever is top of the call stack
            that's the function we're currently running
*/
