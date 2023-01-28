//creating user3 using Object.create
//Object.create is going to give us fine-grained control over our object later on

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};

//accessed data
user3.increment();

//code is getting repetitive and breaking DRY principle
//imagine having millions of users!

//Solution 1. Generate objects using a function

function userCreator(name, score) {
  const newUser = {};

  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

//^^^ this approach is unusable:
// it is storing the same function twice
//also if you wanted to add a new feature
// you'd have to add it to every single object

/*
    Solution 1. Generate Objects using a function

    Problems: Each time we create a new user we make space in our computer's
              memory for all our data and functions. But our functions are just copies

    
    Benefits: It's simple and easy to reason about
*