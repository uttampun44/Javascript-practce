// Write a function that takes an integer minutes and converts it to seconds.
// Input: 5 minutes convert into seconds
// Output: 300 seconds

function findSeconds(minutes){
     let seconds = 60;
     let result = minutes * seconds;
     return result

  }
let checkResult = findSeconds(5)
console.log(checkResult)