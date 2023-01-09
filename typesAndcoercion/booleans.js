/*
    Falsey: which values if converted to booleans would become falses

    ""      0, -0   null    NaN     false       undefined


    Truthy: which values if converted to booleans would become truth

    "FOO"       23      {a:1}       [1,3]       true        function(){...}

*/

//if string isn't empty then do something else don't
//not safe programming since if string is typed, NaN is happened
//should check for numeric characters
if (studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}

//
while (newStudents.length) {
  enrollStudent(newStudents.pop());
}
