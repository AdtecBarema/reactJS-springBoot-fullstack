let sports:string[]= ["Golf","Cricket","Tennis","Swimming"];

//using a tradational for loop
// console.log("*** Using a tradational for loop ***")
// for(let i= 0; i<sports.length;i++){
// console.log(sports[i]);
// }


//using a simplified for loop
console.log(" *** Using a simplified for loop ***")
for (let tempSport of sports){
    console.log(tempSport);
}