function multiplyBy2(input) {
  return input * 2;
}

const mupltiplyBy2 = (input) => {
  // same as above
  return input * 2;
};

const multiplyBy2 = (input) => input * 2; //same as above

const output = multiplyBy2(3);

//if only one thing is being returned, javascript inputs curly braces, parenthesis, and return statement

function copyArrayAndManipulate(array, instructions) {
  const output = []; // creates an empty array

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); //gett's multiplication
  }
  return output; // returns output
}

function multiplyBy2(input) {
  // this is our callback function
  return input * 2;

  //the function we insert is our callback function
}

const result = copyArrayAndManipulate([1, 2, 3], (input) => input * 2); // weird way using arrow functions
//hard readability

/* 
    Anonymous and arrow functions

        Improve immediate legibility of the code

        But atleast for our purposes  they are 'syntatic sugar

        understanding how they're working under the hood is vital to avoid confusion
*/
