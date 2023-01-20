// the => "fat arrow" lets us create an unamed fucntion without much code

(x, y) => x + y;

//since arrow functions are expressions, we can assign them to a variable

const add = (x, y) => x + y;

// is equal to

function add(x, y) {
  return x + y;
}

//arrow functions are great when we just want to return a value

function square(x) {
  return x * x;
}

const square = (x) => x * x;

//for one parameter functions, parentheses are optional

(x) => x * x;

//for multiple parameters, parentheses are required

(firstName, lastName) => firstName + " " + lastName;

//if we need to do more than just return a value,
//we can use curly braces for a "normal" function bodd
//in that case, we still need as return

const addAndLog = (x, y) => {
  let sum = x + y;
  console.log("The sum is", sum);
  return sum;
};
