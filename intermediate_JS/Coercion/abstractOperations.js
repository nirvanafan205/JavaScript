// abstract operation to turn into primitive
// ToPrimitive(hint)

// hint: "number"

valueOf();
toString();


// hint: "String"

toString(); //takes any value and takes representation of it into a string form
valueOf();


// ex of toString()

null ----- "null"

undefined ---- "undefined"

true ---- "true"

3.14 ---- "3.14"

0 ---- "0"


-0 ----- "0"


toString(object);

ToPrimitive(string)

//aka: toString() / valueOf()


//ex of toStrings with arrays

[] ----- "" 

[1,2,3] ---- "1, 2, 3"

[null, undefined] ---- ","

[[], [], [], ] ---- "...."



// to Strings with objects
{} --- "[obect Object]"

{a: 2} --- "[object Object]"

{ toString() { return "X"}} --- "X"


