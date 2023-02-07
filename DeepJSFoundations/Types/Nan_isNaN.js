/*
    NaN("not a number") : Invalid Number

    dont: undefined
    don't: null
    don't: false
    don't: -1
    don't: 0
*/

var myAge = Number("0o46"); //38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); //NaN
myAge - "my son's age"; //NaN

myCatsAge === myCatsAge; //false

isNaN(myAge); //false
isNaN(myCatsAge); //true
isNaN("my son's age"); //true

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); //false
