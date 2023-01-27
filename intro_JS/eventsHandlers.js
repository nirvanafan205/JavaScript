//we can detect eventws with JS using an event listener

// the .addEventListener() method lets us listen for events on a DOM element

//.addEventLister() takes 2 parametrs
//the name of the event to listen to
//a handler function that JS calls when that even is fired on this elemetn
document.addEventListener("click", () => {
  console.log("clicked");
});

/*
    JSpasses an event object to the handler function
    with information about the event
    if we accept this a aparameter, we can use it to get details
*/

document.addEventListener("click", (event) => {
  console.log(event);
});
