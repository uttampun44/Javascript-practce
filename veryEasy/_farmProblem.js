//  The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
//  The farmer breeds three species:
// chickens = 2 legs  cows = 4 legs pigs = 4 legs
// Examples
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50

const farmProblem = (chickens, pigs, cows) =>{
         let result = ((chickens * 2) + (pigs * 4) + (cows * 4));
         console.log(result)
}
farmProblem(2, 3, 5)