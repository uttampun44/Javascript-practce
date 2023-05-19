// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

const profitableGamble = (prob, prize, pay) =>{
    let total = prob * prize;
    console.log(total);
    if(total > pay){
        return true
    }else {
        return false;
    }
 }
let checkResult = profitableGamble(0.2,  50, 9)
console.log(checkResult);

const profitableGambletwo = (probs, prizes, pays) =>{
    let totals = probs * prizes;
    console.log(totals)
    if(totals > pays){
        return true;
    }else{
        return false;
    }
  }
let result = profitableGambletwo(0.9, 1, 2)
console.log(result)