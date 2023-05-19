// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11

const bitwiseAnd = (n1, n2) =>{
    let result = n1 & n2;
    return result;
 }
let bit = bitwiseAnd(7, 12)
console.log(bit)

const bitwiseOr = (a1, a2) =>{
  let result =  a1 | a2;
  return result;
}
let result = bitwiseOr(7, 12)
console.log(result)

function bitwiseXor(x1, x2){
   let result = x1 ^ x2;
   console.log(result)
 }
 bitwiseXor(7, 12)