// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Example calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

function calculator(str){
    let result = eval(str);
    console.log(result)
  }
calculator("45-15")