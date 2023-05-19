//  Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple the absolute difference if the specified number is greater than 19.


const practiceNine = () =>{
   
     let number = 19;
     let n = 20;
       
      if(n < number){
        return n - number
      }else{
        return (n - number) * 3
      }
   }
let checkResult = practiceNine()
console.log(checkResult)