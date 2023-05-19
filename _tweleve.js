// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//  The string length must be broader than or equal to 1.

const exchangeString = (change) =>{
     
   if(change.length < 0){
      return change
   }
   mid_char = change.substring(1, change.length - 1);
   return (change.charAt(change.length - 1)) + mid_char + change.charAt(0);
 }
 let check = exchangeString('SWIFT')
 console.log(check)