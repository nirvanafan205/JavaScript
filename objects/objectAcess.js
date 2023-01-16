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
