/*

    Use new:

        Object()
        Array()
        Function()
        Date()
        RegExp()
        Error()

    Don't use new:

        String()
        Number()
        Boolean()
*/

var yesterday = new Date("March 6, 2019");

yesterday.toUTCString();
//Wed, 06 Mar 2019 06:00:00 GMT"

var myGpa = String(transcript.gpa);

//"3.03"
