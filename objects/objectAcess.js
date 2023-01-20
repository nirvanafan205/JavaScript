const matthew = {
  name: "Matthew",
  home: "Panorama City",
  languages: ["C++", "Java", "HTML", "CSS", "C"],
  pet: ["Dogs", "Birds", "cat"],
  hobbies: ["Hiking", "Eating", "coding", "Gaming"],
  concerts: [
    "System of a Down",
    "Magic Giant",
    "Joyner Lucas",
    "Beast Coast",
    "Earl Sweatshirt",
    "Rise Against",
  ],
  vehicle: null,
};

for (let i = 0; i < matthew.languages.length; i++) {
  console.log(matthew.languages[i]);
}

console.log("\n");

for (let x of matthew.languages) {
  console.log(x);
}

const dog = {
  name: "Ein",
  breed: "Corgi",
  speak: function () {
    console.log("woof woof");
  },
};

console.log(dog.speak());

//this in a method lets us reference other properties on the object

const ayyylmao = {
  name: "Matthew",
};

ayyylmao.speak = function () {
  console.log("Hi my name is", this.name);
};

ayyylmao.speak();

//nested objects
const menu = {
  lunch: {
    appetizer: "salad",
    main: "spaghetti",
    dessert: "tiramisu",
  },

  dinner: {
    appetizer: "samosa",
    main: "saag paneer",
    dessert: "gulab jamun",
  },
};

//objets in arrays and objects

const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scar" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];

const spiceGirls = {
  albums: ["Spice", "Spiceworld", "Forever"],
  motto: "Girl Power",
  members: spices,
};

console.log("\n");

console.log(spiceGirls.motto);

console.log(spiceGirls.members[1]);

console.log(spiceGirls.albums[1]);

console.log(spiceGirls.members[4].name);
