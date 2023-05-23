var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
//using a tradational for loop
console.log("*** Using a tradational for loop ***");
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//using a simplified for loop
console.log(" *** Using a simplified for loop ***");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    console.log(tempSport);
}
