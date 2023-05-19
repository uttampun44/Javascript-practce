// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.


function divisble(x){
   
let  numOne = 3;
let numTwo = 7;
   
    if(x % numOne == 0 || X % numTwo == 0){
        return true;
    }else{
        return false;
    }
  }
let answer = divisble(15)
console.log(answer)


function secondDivisible(y){
  
    if(y % 8 == 0 || y % 7 ==0){
        return true;
    }else{
        return false
    }
 }
let secondAnswer = secondDivisible(64)
console.log(secondAnswer)