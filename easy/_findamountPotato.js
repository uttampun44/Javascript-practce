// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.
// /Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1


const potatoes = (vegetables) =>{
  
     let count = 0;
  for(let i = 0; i<vegetables.length; i++){
    if(vegetables.slice(i, "potato".length) === "potato"){
        count++;
    }
  }
  return count;
    
 }
let checkResult = potatoes("potatopotato")
console.log(checkResult)


function findamountPotato(a){
  
     let countNumber = 0;

     for(let i=0; i<countNumber.length; i++){
        if(a.charAt(i) === "potato"){
            countNumber ++;
            console.log(countNumber)
        }
     }
     return countNumber;
  }
findamountPotato("potato")