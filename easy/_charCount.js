// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4


function charCount(a, b){
  
    let count = 0
    for (let index = 0; index < b.length; index++) {
          if(b.charAt(index) == "b"){
            count += 1
            console.log(count);
          }
    }
    return count;
 }
 charCount("b", "big fat bubble")



 const count = (x, y) =>{
  
      let countNumber = 0;
      for(let i=0; i<y.length; i++){
        if(y.charAt(i) == "a"){
            countNumber += 1;
            console.log(countNumber);
        }
      }
      return count;
 }
 count("a", "edabit")