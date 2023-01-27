//arrays can be empty or hold a single item
let emptyArray = [];

let oneItemArray = ["Lonely"];

//arrays can hold any type of DataTransferItemList, or mix and match

let mixedArray = ["pop", 2, false, "squish"];

let chars = ["c", "a", "d", "b"];

chars.sort(); //sorts array

let sentence = ["tigers", "lions", "bears oh my!"];

sentence.join(" & "); // turns it into one string with & in between each element

let numbers = [1, 2, 3];

numbers.concat([4, 5, 6]); //joins together two different array to get one with all of the elements of each of the arrays

console.log(chars);

console.log(`${sentence}`);

console.log(numbers);
