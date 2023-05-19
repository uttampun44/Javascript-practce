// Write a function that returns the length of a string. Make your function recursive.
// example
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0

const length = (a) =>{
   let result = a.length;
    return result;
 }
 let checkResult = length("apple")
 console.log(checkResult)

 function lengths(x){
   let res =  x.length;
   return res
  }
let result =   lengths("make")
console.log(result)