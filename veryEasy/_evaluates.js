// Create a function that evaluates an equation.
// example
// eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1

const evaluates = (evals) =>{
    let result = eval(evals)
      return result
   }
let checkResult = evaluates("6/(9-7)")
console.log(checkResult)

function evaluate(e){
   let res =  eval(e)
   return res;
 }
let result =  evaluate("3+2-4")
console.log(result)