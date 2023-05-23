let sportsTwo:string[] =["Golf","Cricket","Tennis"];

sportsTwo.push("BaseBall");
sportsTwo.push("futball");

for(let tempSport of sportsTwo){
    if(tempSport=="futball"){
        console.log(`${tempSport} << is my fevourite sport!`)
    }
    else {
        console.log(tempSport)
    }  
}


