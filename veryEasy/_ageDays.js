// Create a function that takes the age in years and returns the age in days.
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

const ageDays = (age) =>{
   let result = age * 365;
   return result
 }
let checkResult = ageDays(65)
console.log(checkResult)