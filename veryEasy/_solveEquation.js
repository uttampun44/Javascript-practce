// Create a function that takes an equation (e.g. "1+1"), and returns the answer.
// Example
// equation("1+1") ➞ 2
// equation("7*4-2") ➞ 26
// equation("1+1+1+1+1") ➞ 5

const equation = (a) =>{
   let result = eval(a);
   return result
 }
let checkResult = equation("7*4-2")
console.log(checkResult)