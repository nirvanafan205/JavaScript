// ex of using coercion

var numStudents = 16;

// numStudents is being coerced implicitily

console.log('There are ${numStudents} students.');

//There are 16 students.""


var msg1 = "There are ";
var numStudents = 16;

var msg2 = " students.";

// coercion happens when adding things together in console log 
// its invoking operator overloading
console.log(msg1 + numStudents + msg2);

// "There are 16 students."




// explicit coerecion


var numStudents = 16;

// little bit unclear 
console.log('There are ${[numStudents].join("")} students.');

//use this 

console.log('There are ${String(numStudents)} students.');

// "There are 16 students["



// toNumber examples 


function addAStudent(numStudents) {
    // string concatination
    return numStudents + 1;
}

addAStudent(StudentsInputElem.value);

// "161" OOPS!


function addAStudent(numStudents) {
    return numStudents + 1;
}

addAStudent(+studentsInputElem.value);

// 17


// best way to turn string to number
// makes it clear what's happening

addAStudent(
    Number(studentsInputElem.value)
);


//using minus operator

function kickStudentOut(numStudents)
{
    // only defined for numbers -
    //it's gonna invoke toNumber()
    return numStudents - 1;
}

kickStudentOut(studentsInputElem.value);

// 15


// toBoolean coercions


// falsy is empty string
// truthy if has a bunch of whitespace 
if(studentsInputElem.value)
{
    numStudents = Number(studentsInputElem.value);
}

// if 0 is false
// anything not 0 is true
// what happens when its NaN???
while(newStudents.length)
{
    enrollStudent(newStudents.pop());
}



// both options makes it more clear what to do
// be more explicit
if(!!studentsInputElem.value) 
{
    numStudents = Number(studentsInputElem.value);
}

while(newStudents.length > 0)
{
    enrollStudent(newStudents.pop());
}



if(studentsInputElem.value)
{
    student.name = studentNameElem.value;
}

Boolean(""); // false

Boolean(" \t\n"); // true






var workshop = getRegistration(student);

if(workshop)
{
    console.log(`Welcome ${student.name} to ${workshop.name}.`)
}

// ********

Boolean(undefined); //false

Boolean(null); //false

Boolean({}); //true