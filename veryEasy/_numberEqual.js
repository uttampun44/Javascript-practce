// Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

function numberEqual(num1, num2){
   if(num1 === num2){
    return true
   }else{
    return false;
   }
  }
let checkResult = numberEqual(2, "2")
console.log(checkResult)