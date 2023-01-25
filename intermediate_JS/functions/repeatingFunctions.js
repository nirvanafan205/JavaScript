// now suppose we have a function copyArrayAndMultiplyBy2

function copyArrayAndMultiplyBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}

const myArray = [1, 2, 3];

const result = copyArrayAndMultiplyBy2(myArray);

//principle broken *don't repeat yourself*
//what if we want to copy array and divide by 2
function copyArrayAndDivideBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }

  return output;
}

const myArray2 = [1, 2, 3];

const result2 = copyArrayAndDivideBy2(myArray2);

//we could generalize our function
//so we pass in our specific instruction
// only when we run copyArrayAndManipulate

//takes in an array and a function
function copyArrayAndManipulate(array, instructions) {
  const output = []; // creates an empty array

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i])); //gett's multiplication
  }
  return output; // returns output
}

function multiplyBy2(input) {
  return input * 2;
}

const answer = copyArrayAndManipulate([1, 2, , 3], multiplyBy2);
