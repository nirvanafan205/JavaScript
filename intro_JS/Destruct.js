//Destructing is a fancy way of declaring multiple variables at once
//by "extracting" values from an object with their property names
const spices = [{ name: "Emma", nickname: "Baby" }];

let { name, nickname } = spices[0];

console.log(nickname);

//we can also destructure Arrays, assigning variables for their items

let [one, two, three] = [1, 2, 3];

//we can ignore the values in the array we don't need

//we can use ... to collect remaining values

const [uno, ...others] = [1, 2, 3, 4];

console.log(uno); // 1
console.log(others); //2, 3, 4
