Number( "" );       // 0
Number( " \t\n");   // 0
Number( null );     // o
Number( undefined);     // NaN
Number( [] );       // 0
Number( [1, 2, 3] );    // NaN
Number( [null] );       // 0
Number( [undefined] );         // 0
Number( {});        //NaN



String( -0 );   //"0"
String( null );     // "null"
String(undefined);      // "undefined"
String( [null] );       // ""
String( [undefined] );      // ""


Boolean( new Boolean(false) );      //true



// Root of All Evil (Coercion)
// empty strings become 0
// any string full of white spaces becomes 0 too
// this is because the toNumber() stripes off all leading and trailing white space before it does it's coerecion 



studentsInput.value = "";


Number(studentsInput.value); // 0

studentsInput.value = " \t\n";



Number(studentsInput.value);    // 0


// other problems lies here with numbering with 1 and 0


1 < 2 < 3       // true but....


/*
    1 < 2 is true

    but it then is
    turned into 1 which compares 

    1 < 3
*/