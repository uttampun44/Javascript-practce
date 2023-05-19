// Create a function that returns true if a string is empty and false otherwise.
// example
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false

const empty = (a) =>{
  if(a == ""){
    return true
  }else{
     return false;
  }
 }
let checkResult = empty("")
console.log(checkResult);

const isEmpty = (x) =>{
      if(x == ""){
        return true
      }else{
        return false;
      }
 }
let result =  isEmpty("a")
console.log(result)