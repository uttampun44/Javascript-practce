// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero.
//  Return that value.

// example 
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

function returnRemainder(x, y){
     let result = x % y;
     return result
  }
let checkResult = returnRemainder(3, 4)
console.log(checkResult)