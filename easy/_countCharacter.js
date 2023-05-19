// Create a function that takes two strings as arguments and return either true or false
//  depending on whether the total number of characters in the first string
//  is equal to the total number of characters in the second string.

// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

const comp = (x, y) =>{
  if(x.length === y.length){
     return true;
  }else{
    return false;
  }
 }
let checkResult = comp("AB", "CD")
console.log(checkResult);

function comps(a, b){
   if(a.length !== b.length){
     return false;
   }else{
    return true;
   }
}
let result = comp("hello", "edabit")
console.log(result)