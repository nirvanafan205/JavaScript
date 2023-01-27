// we need to know how promise-defferred functionality gets back into
//javascript to be run

//declared and stored in global memory
function display(data) {
  console.log(data);
}

//declared and stored in global memory
function printHello() {
  console.log("Hello"); // this is printed last
}

//declared and stored in global memory
function blockFor300ms() {}

//this is printed second
setTimeout(printHello, 0); //gets put inside of the call back queue
// goes to web browser feature
//sets timer to 0 ms

const futureData = fetch("https://twitter.com/will/tweets/1");
//promise object is made and stored in future data (inside of the global memory)
//automatic properties are value (empty) and an unfullfilled: [] (it's hidden//empty)
//parameter makes a network request on the brother to twitter.com and into the will/1 file path

futureData.then(display);
//display grabs the information into the unfullfilled array

blockFor300ms();

console.log("Me first!"); //this is the first thing printed

/*
    then method and functionality to call on completion

    Any code we want t o run on the returned data must also be saved on the promise object

    Added using .then method to the hidden property 'onFulfilment'

    Promise objects will automatically trigger the attached function to run (with its input being the returned data)

    there are two queues going on here

    callback queue with 
      print hello and display

    microstask queue 
      where display is put inside of

    when call stack is  empty it goes to microtask queue first for its functions
*/

/*
  Promises

    Problems

      99% of dvelopers have no idea how they're working under the hod
      Debugging becomes super-hard as a result
      Developers fail technical interviews

    Benefits

      Cleaner readable style with pseudo-synchronous style code
      nice error handling process

*/

/*
  We have rules for the execution of our asynchronously delayed code

    Hold promise-defferred functions in a microtask queue and callback function in a 
    task queue (callback queue) when the web browser feature (API) finishes

    Add the function to the call stack (fun the function) when:

      call stack is empty and all global code run (have the event loop check this condition)

      prioritize functions in the microtask queue over the callback queue


  Promises, Web APIs, the callback and microtask queues and event loop enable:

    Non-blocking applications: This means we don't have to wait in the single thread and don't block further code from running

    However long it takes: We cannot predict when our Browser feature's work will finish so we let JS handle automatically running the function on its completion

    Web applications: Asynchronous JavaScript is the backbone of the modern web - letting us build fast 'non-blocking' applications

*/
