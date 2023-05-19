// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.


const numberSplit = (a) =>{
 
    let arr = [];

    if(a){
      let num = Math.floor(a/2);
      let b = a - num;
     arr.push(num, b)
    }
    return arr;
 }
let checkResult = numberSplit(10)
console.log(checkResult)


function splitNumber(x){
 
    let emptyArr = [];
    if(x){
        let c = Math.floor(x / 2);
        let res =  x - c;
        emptyArr.push(c, res);
    }
    return emptyArr;
 }
let result = splitNumber(11)
console.log(result)