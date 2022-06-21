let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportOne.length; i++) {
  console.log(sportOne[i]);
}

// Simplified For Loop
for (let tempSport of sportOne) {
  console.log(tempSport); // will print the actual element of an array, not index
}

// Conditionals
for (let tempSport of sportOne) {
  if (tempSport == "Cricket") {
      console.log(tempSport + " << My Favorite!");
  } else {
    console.log(tempSport);
  }
}