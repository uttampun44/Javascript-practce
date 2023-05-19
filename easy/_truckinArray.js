// Create a function that takes two arrays and insert the second array in the middle of the first array.
// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.

function tuckIn(arrOne, arrTwo){
   
    let a = [arrOne.shift()];
    let b = [arrOne.pop()];
    
    for(let i=0; i<arrTwo.length; i++){
        arrOne.push(arrTwo[i])
    }
    arrOne.push(b[0])
    for(let j = 0; j<arrOne.length; j++){
        a.push(arrOne[j])
    }
    return a
  }
let checkResult = tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
console.log(checkResult)

const tuck = (arr1, arr2) =>{

    let arrs = [];
    let res = [...arr1, ...arr2]
    console.log(res)
 }
tuck([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])

function tuckinArray(a, b){
   
    let arr=[];
    for(let i=0; i<a.length; i++){
        for(let j=0; j<b.length; j++){
        [a[i], b[j]] == arr[i, j];
        return [a, b]
        }
    }
     
 }
 let result = tuckinArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
console.log(result)