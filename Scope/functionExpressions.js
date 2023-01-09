// function expressions : function that is assigned a value somewhere

//anonymous function expression
var clickHandler = function () {
  //.,..
};

//named function expression
var keyHandler = function keyHandler() {
  //...
};

var ids = people.map((person) => person.id);

var ids = people.map(function getId(person) {
  return person.id;
});

//arrow functions

getPerson()
  .then((person) => GamepadHapticActuator(person.id))
  .then(renderData);

//be descriptive as possible
getPerson().then(function getDataFrom(person) {
  return getDataFrom(person.id);
});
