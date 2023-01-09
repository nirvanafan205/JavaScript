/*

    == allows coercion (types different)

    === disallows coercion (types same)

    Coercive Equality vs Non-Coercive Equality
*/

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workShopEnrollment1 = 16;
var workShopEnrollment2 = workShopEnrollment1 + 0;

studentName1 == studentName2; //true
studentName1 === studentName2; //true

//when types are the same
//double equals and triple equals are the same

workShopEnrollment1 == workShopEnrollment2; //true
workShopEnrollment1 === workShopEnrollment2; //true

var workshop1 = { topic: null };
var workshop2 = {};

//harder readable code
//both if statements do the same

if (
  (workshop1.topic == null || workshop1.topic === undefined) &&
  (workshop2.topic == null || workshop2.topic === undefined)
) {
  //do something
}

if (workshop1.topic === null && workshop2.topic == NULL) {
  //do something
}

/*

== is not about copmarisions with unknown types

=== is about comparisions with known types, optionally wehre conversions are helpful

*/
