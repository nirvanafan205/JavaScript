/*
    Primitive Types (data that is not an object and has no methods or properties)

        undefined
        string
        number
        boolean
        symbol

        ????

        undeclared
        null
        function
        array
        bigint 
*/

var v;
typeof v; //undefined

v = "1";
typeof v; //string

v = 2;
typeof v; //number

v = true;
typeof v; // boolean

v = {};
typeof v; // obj

v = Symnbol();
typeof v; // symbol

/*
    type of will always return a string
    it is an enum list
*/

typeof doesntExist; // undefined

var v = null;
typeof v; // object

v = function () {};
typeof v; //function

v = [1, 2, 3];
typeof v; // object

var v = 42n;

typeof v; //bigint
