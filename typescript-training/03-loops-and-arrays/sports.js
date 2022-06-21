var sportOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}
// Simplified For Loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    console.log(tempSport); // will print the actual element of an array, not index
}
// Conditionals
for (var _a = 0, sportOne_2 = sportOne; _a < sportOne_2.length; _a++) {
    var tempSport = sportOne_2[_a];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
