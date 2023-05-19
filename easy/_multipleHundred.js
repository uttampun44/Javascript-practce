// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// Example 
// divisible(1) ➞ false
// divisible(1000) ➞ true
// divisible(100) ➞ true

const divisible = (a) =>{
    
    if(a % 100 == 0){
        return true
    }else{
        return false;
    }
 }
 let checkResult = divisible(1)
 console.log(checkResult);


 function divisibles(x){
  
      if(x % 100 == 0){
        return true
      }else{
        return false;
      }
 }
let result =  divisibles(1000)
console.log(result)