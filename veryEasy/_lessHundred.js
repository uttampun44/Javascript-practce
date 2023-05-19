// Given two numbers, return true if the sum of both numbers is less than 100. 
// Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

const lessHundred = (numOne, numTwo) => {
   if(numOne + numTwo <= 100){
     return true;
   }else{
    return false;
   }
  }
 let checkResult = lessHundred(22, 15)
console.log(checkResult)