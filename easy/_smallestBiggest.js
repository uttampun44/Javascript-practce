// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

const minMax = (arr) =>{
    let arrs = [];
     arrs.push(Math.min(...arr))
     arrs.push(Math.max(...arr))
     return arrs
 }
 let check = minMax([1,2,3,4,5])
 console.log(check)