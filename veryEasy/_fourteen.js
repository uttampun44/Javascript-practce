
// Write a JavaScript program to create a string from a given string. 
// This is done by taking the last 3 characters and adding them at both the front and back. 
// The string length must be 3 or more.
// add ift

const lastWord = () =>{
   let x = 'SWIFT'
   let add = "IFT";
    
   for(let i = add; i<x.length; i++){
       x[i] = x[1+i];
       console.log(x[i])
   }
  }
let result = lastWord()
console.log(result)


function sum(a){
  let result =  a * a;
  return result;
}
let check = sum(5)
console.log(check)