//spread(...)

//is another neat trick for iterating over arrays

//lets us take all the items in an array and aspread em arround

//ex

const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];
const burnBook = [...oldBurns, ...newBurns];

//equavalent to

const together = oldBurns.concat(newBurns);

//we can also use it to pass all the items from an array as arguements to a function or method

const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "TypeScript", "Node"];
skills.push(...newSkills);
console.log(...skills);
