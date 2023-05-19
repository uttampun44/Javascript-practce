// Write a JavaScript program to get the difference between a given number and 13, 
// if the number is broader than 13 return double the absolute difference

const seven = () =>{
    let numOne = 13; 
    let n = 20;

    if(n < 13){
        return n - 13
    }else{
        return (n -13 ) * 2;
    }

  }
let result = seven()
console.log(result)