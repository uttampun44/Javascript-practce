// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference


const answerFive = (n) =>{
    
    if(n < 13){
        return 13 - n;
    }else{
        return ( n - 13) * 2;
    }
        
  }
let seeAnswer = answerFive()
console.log(seeAnswer);