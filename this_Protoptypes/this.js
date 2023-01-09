/*
    A function's this references the execution
    context for that call, determined entirely by
    how the function was called.

    A this-aware function can thus have a different
    context each time it's called, which makes
    it more flexible and reusuable (dynamic context)
*/

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

//dynamic context
workshop.ask("what is implicit binding?");
//Kyle what is implicit binding?

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };

  //explicit binding
  ask.call(myContext, "Why"); //Suzy why?
}

otherClass();
