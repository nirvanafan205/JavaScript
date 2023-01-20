//map calls a function on each item in an arrray to create a new array

const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];

const nicknames = spices.map((s) => s.nickname + " Spice");

//string templates are useful too
// make them with backticks and ${}, e.g.
//`string to insert ${variable} into'

(s) => `${s.nicname} Spice`;

(s) => s.nickname + " Spice";

//filter calls a true/false function ohn each item
// and creates a new array with only the items
//where the function returns true

const mels = spices.filter((s) => s.name.includes("Mel"));

const bitches = spices.map((s) => s.name);

for (let x of bitches) {
  console.log(x);
}

console.log("\n");

const yBitches = spices.filter((s) => s.nickname.includes("y"));

for (let x of yBitches) {
  console.log(x.name);
}
