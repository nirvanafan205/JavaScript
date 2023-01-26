/*
    Promises, Async and the Event Loop

        Promises - the most signficant ES6 feature

        Asynchronicity - the feature that makes dynamic web applications possible

        The event loop - JavaScripts triage

        Microtask queue, Callback queue and API


        Asynchronocity is the backbone of modern web development in JavaScript yet

            JavaScript is 

                Single threaded (one command runs at a time)

                Synchronously executed (each line is run in order the code appears)

            So what if we have a task?

                Accessing Twitter's server to get new tweets that takes a long time

                Code we want to run using those tweets

            Challenge: We want to wait for the tweets to be stored in tweets so they're there to run displayTweets on - but no code can run in the meantime
*/

//slow function blocks further code running

const tweets = getTweets("http://twitter.com/will/1");

//350 ms wait while a request is sent to Twitter HQ

displayTweets(tweets);

//more code to run

console.log("I want to runnnn!");

//what if we try to delay a function directly using setTimeout?

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000); //Me first will be printed first
console.log("Me first!");

setTimeout(printHello, 0); //Me first will aslo be printed first
console.log("Me first!");

/*
    JavaScript is not enough - We need new pieces 

        Core JavaScript engine has 3 main parts:

            THread of execution
            Memory/variable environment
            Call Stack

        We need to add some new components

        Web Browswer APIs/Node background APIs
        Promises
        Event loop, Callback/Task queue and micro task queue
*/
