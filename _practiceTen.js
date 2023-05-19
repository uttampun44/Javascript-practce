// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 

const ten = (x) =>{
    return ((Math.abs(100 - x) < 20));
    (Math.abs(400 - x) < 20)
  }
let checkResult = ten(500)
console.log(checkResult)

const secondTen = (numberOne) =>{
  
    if(numberOne > 20 && numberOne < 400){
       return true
    }else{
      return false
    }
 }
let check = ten(90)
console.log(check)