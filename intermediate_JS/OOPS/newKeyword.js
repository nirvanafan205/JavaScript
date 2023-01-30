//solution 3 - Introducing the keyword that automates the hard work: new

/*
    When we call the function that returns an object with new in front we automate 2 things

        Create a new user object
        Return the new user object

    But we need to adjust how we write the body of userCreator - how can we:

        Refer to the auto-created object?
        Know where to put our single copies of functions?
*/

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype; //{};

userCreator.prototype.increment = function () {
  this.score++;
};

//new automates the hard work
const user1 = new userCreator("Will", 3);

//Interlude - functions are both objecstr and functions

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5; //this attaches an object to the function
//dot notation stores 5 on the property stored

multiplyBy2(3); //6
//parethesis still lets us use the function part of it

multiplyBy2.stored; //5
multiplyBy2.prototype; //{}
//defaults to an empty object

//we could use the fact that all functions have a default property 'prototype' on their object version,
//(itself an object) - to replace our 'functionStore' object

//function object combo
//automatically has a  property with
// prototype : {} an empty object
function creatorUser(name, score) {
  this.name = name;
  this.score = score;
}

creatorUser.prototype.Increment = function () {
  this.score++;
};

creatorUser.prototype.login = function () {
  console.log("login");
};

const user4 = new creatorUser("Eva", 9);

/*
    local memory

        name : 'Eva'
        score : 9
    
        this : {name : 'Eva', score : 9} //declares and saves an empty object
        //hidden __proto__ property links to the object part of the creatorUser function's object (prototype property object)

    
    1. this {}

    2. __proto__ : creatorUser.prototype //all automated with new keyword

    3. returns this
*/

user4.Increment();

/*
    looks for user4 in global memory (its there)
    looks for Increment in global memory (not there)

    takes __proto__ and follows it to creatorUser and checks its object prototype and checks its object
*/

/*
    Solution 3 - Introducing the keyword that automates the hard work: new

    Benefits:
        Faster to write. Often used in practice in professional code

    Problems:
        95% of developers have no idea how it works and therefore fail interveiws

        We have to upper case first letter of the function so we know it requres 'new' to work!

*/

//Solution 4: The class 'syntatic sugar'

/*
    We're writng our shared methods separetly from our object 'constructor' intelf
    (off in the creatorUser.prototype object)

*/

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}

const user5 = new UserCreator("Eva", 9);
user5.increment();
