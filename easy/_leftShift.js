// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944

function shiftToLeft(num1, num2){

    let result = num1 << num2;
     console.log(result)
 }
 shiftToLeft(5, 2)

 function shifttoLeft(a1, a2){
   
       let result = a1 << a2;
       console.log(result)
  }
  shifttoLeft(10, 3)