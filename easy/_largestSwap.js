// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true

// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
//  On the other hand, swapping 43 gives us 34, and 43 > 34.

// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true
// Notes
// Numbers with two identical digits (third example) should yield true (you can't do better).

const largestSwap = (num) =>{
   
    let end = num.toString();
    let arr = [];
    let start = 0;

    for(let i= 0; i<end.length; i++){
        arr.push(end[end.length-i-1])
        start += arr[i];
    }

    let result = parseInt(end);
   
    if(result > num){
        return false
    }else{
        return true
    }
 }
 let result = largestSwap(14)
console.log(result)

const reverseString = (name) =>{

     for(let i=name.length-1; i >= 0; i--){
        console.log(name[i])
     }
}
reverseString("UTTAM")
