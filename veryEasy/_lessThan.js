// Given two numbers, return true if the sum of both numbers is less than 100. 
// Otherwise return false.
// lessThan100(22, 15) ➞ true
// 22 + 15 = 37

function lessThan(a, b){
    if(a + b <= 100){
        return true
    }else{
        return false;
    }
  }
let checkResult = lessThan(99, 15)
console.log(checkResult)