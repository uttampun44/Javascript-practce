// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
// Example
// dividesEvenly(98, 7) ➞ true
// 98/7 = 14
// dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25

const dividesEvenly = (a, b) =>{
    if(a / b){
        return true
    }else{
        return false
    }
  }
let checkResult = dividesEvenly(98, 7)
console.log(checkResult)

function divides(x, y){
  if(x/y){
    return true;
  }else{
    return false;
  }
}
let result = divides(85, 4)
console.log(result)