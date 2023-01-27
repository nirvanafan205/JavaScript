var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";

console.log(msg1 + numStudents + msg2);
// "There are 16 students."

//numStudents is being converted into a string with +""
//as long as there's one string in the console.log, i'll be converted to a string
console.log(`There are ${numStudents + ""} students.`);

/*
    Number + Number = Number

    Number + String = String

    String + Number = String

    String + String = String

*/

function addStudent(numStudents) {
  return numStudents + 1;
}

//converting from string to number
addStudent(Number(numStudentsInputElem.value));
