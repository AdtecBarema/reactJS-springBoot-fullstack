var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("BaseBall");
sportsTwo.push("futball");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "futball") {
        console.log("".concat(tempSport, " << is my fevourite sport!"));
    }
    else {
        console.log(tempSport);
    }
}
