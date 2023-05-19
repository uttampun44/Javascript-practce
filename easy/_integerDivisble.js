// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

const divisibleByFive = (a) =>{

     if(a % 5 == 0){
        return true;
     }else{
        return false;
     }
 }
let checkResult =  divisibleByFive(5)
console.log(checkResult)

function divisiblebyFive(x){
   if(x % 5 == 0){
    return true;
   }else{
    return false
   }
 }
 let result = divisibleByFive(37)
 console.log(result)