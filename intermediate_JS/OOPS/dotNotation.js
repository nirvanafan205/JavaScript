// Classes, Prototypes - Object Oriented JavaScript

/*
    An enormously popular paradigm for structuring our complex code

    Prototype chain - the feature behind the scene that eneables emulation of OOP but is a compelling tool in itself

    Understanding the difference between __proto__ and prototype

    The new and class keywords as tools to automate our object and method creation
*/

// Core of development (and running code)

/*
    Save data (in a quiz game that scores of user1 and user2)
    Run code (functions) using that data (increase user 2's score)

    In a quiz game I need to save lots of users, but also admis, quiz questions, quiz
    outcomes, league tables - all have data and associated functionality

    In 100,000 lines of code

        Where is the functionality when I need it?
        How do I make sure the functionality is only used on the right data!
*/

//Code should be

/*
    Easy to reason about

    Easy to add features to (new functionality)

    Efficient and performant

    The Object-oriented paradigm aims is to let us achieve these three goals
*/

//If storing each user in an app with their respective data

/*
    User1:          User2:
    name: 'Tim'     name: 'Stephanie'
    score: 3        score: 5

    And the functionality I need to have for each user
        Increment functionality

    How to store data and functionality together in one place
*/

//Objects- store functions with their associated data!

const user1 = {
    name: "Will",
    score: 3,
    increment: function { user1.score++;}
};

user1.increment(); //user.1score -> 4

//creating user2 user dot notation
//declare an empty object and add properties with dot notation

const user2 = {};

user2.name = "Tim";
user1.score = 6;
user2.increment = function() {
    user12.score++;
};