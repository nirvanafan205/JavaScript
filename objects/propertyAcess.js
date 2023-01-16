const js = {
  name: "JavaScript",
  abb: "JS",
  isAwesome: true,
  officialSpec: "ECMAScript",
  birthYear: 1995,
  creator: "Brendan Eich",
};

/*
    Objects collect multiple values together to describe more complex data

    We can point at different values using variables in our code

    objects let us point at related values using properties in the object
*/

js.name; //Javascript

js.isAwesome; //TRUE

console.log(js.name);

//setting provperty values

const indecisive = {
  lunch: "Sandwhich",
};

indecisive.lunch = "tacos"; //changes lunch value to tacos

indecisive.snack = "chips"; //adds new key and value

console.log(indecisive);
