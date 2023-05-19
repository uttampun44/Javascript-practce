// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.
// Example 
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

function ten(a, b){
  if(a== 9 || b == 10){
    return true;
  }else{
    return false;
  }
 }
let checkResult = ten(9, 10)
console.log(checkResult)

const makesTen = (x, y) =>{
      if(x == 10 || y == 10){
        return true
      }else{
        return false;
      }
 }
let result =  makesTen(9, 9)
console.log(result);