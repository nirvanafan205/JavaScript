var nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  //for loop
  console.log(nums[i]);
}

console.log("\n");

for (let student of nums) {
  //for each loop
  console.log(student);
}

//loop that deletes first of array

var students = ["Matt", "Sarah", "Susan"];

while (students.length > 0) {
  let student = students.pop(); //pop starts from the back to the first element of array, shift would work inversely
  console.log(`Number is gonna be deleted, ${student}`);
}
