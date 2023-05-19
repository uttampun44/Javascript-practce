// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.

const  filterArray = (a) =>{
    
    let emtyArray = [];

   for(let i = 0; i<a.length; i++){
      if(typeof a[i] !== "string"){
        emtyArray.push(a[i])
      }
    }
    return emtyArray
  }
let checkResult = filterArray([1, 2, "a", "b"])
console.log(checkResult)


function arrayFilter(arr){
    
    let emptyArray = [];

    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] !== "string"){
            emptyArray.push(arr[i])

        }
    }
    return emptyArray;
 }
let check = arrayFilter([1, 2, "aasf", "1", "123", 123])
console.log(check)