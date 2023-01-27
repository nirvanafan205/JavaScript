/*
    Using two-pronged 'facade' functions that both:

        Initiate background web browser work and
        Return a placeholder object (promise) immediately in JavaScript
*/

//Promises

//declaring a function display is stored in global memory
function display(data) {
  console.log(data);
}

//futureData is then created and uninitialized in globabl memory
const futureData = fetch("https://twitter.com/MikeTroy81");
/*
    in javascript fetch returns out a special object {value: which is undefined and a property called unfullfilled: [which is hidden, an empty array]}
    a promise object which has two properties

    future data then has the promise object

    fetch also has properties going on in the web broswer
        which is a network request

    //fetch ultimately set up in the background with all the things it needs for the data through the internet
    in javascript it made a place holder object known as a promise object which is stored in futureData 
    {value: which is undefined and a property called unfullfilled: [which is hidden, an empty array]}


*/

futureData.then(display);
/*
    .then is a method that gets hidden objects
    display function is then put inside of the unfullfilled array
*/

console.log("Me first!");
