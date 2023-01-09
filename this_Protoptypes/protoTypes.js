//prototypes: as "classes"
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle is a 'prototype' a class?

reactJS.ask("Istn' 'prototype' ugly");
//Suzy Isn't 'prototype' ugly?
