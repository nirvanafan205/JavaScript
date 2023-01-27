//so when we give JS a task that takes a while, it doesn't stop and wait

console.log("This will print first");

setTimeout(() => console.log("This will print third"), 1000);

console.log("This will print second");

//fetch() lets us use JS to load data from APIs
fetch("https://dog.ceo/api/breed/hound/list");
//Promise { <state>: "pending" }

//So JS writes us an "IOU" for the data value it doesn't have yet
//aka a promise of a value
//promises can be in three possible states

//pending: still waiting for the value, hang tight

//fulfilled: finally got the value, all done

//rejected: couldnt' get the value, all done

//it takes time for promises to resolve, so they are "asynchronous"

//await lets us tell JS to stop and wait for an asynchronous operation to finish

//in the case of a promise, it waits for it to resolve before continuing with our code

//the promise we get from fetch() resolves to a response object

console.log(response);

let response = await fetch("https://dog.ceo/api/breed/hound/list");

let body = await response.json();
