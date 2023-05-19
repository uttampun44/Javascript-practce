// Create a function that takes the number of wins,
//  draws and losses and calculates the number of points a football team has obtained so far.

// idea 
// wins get 3 points
// draws get 1 point
// losses get 0 points

// Example footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0

function footballPoints(wins, draws, looses){
   let result =  ((wins * 3) + (draws * 1) + (looses * 0))
      return result
 }
let checkResult = footballPoints(5, 0, 2)
console.log(checkResult)