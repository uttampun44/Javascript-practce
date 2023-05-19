// Write a JavaScript program to check two given integers whether one is positive and another one is negative

const positiveNegative = () =>{
    
    let positive = 20;
    let negative = -90;

    if((positive > 0 && negative < 0) || (positive < 0 && negative > 0)){
        return true;
    }else{
        return false;
    }
  }
let checkResult = positiveNegative()
console.log(checkResult)