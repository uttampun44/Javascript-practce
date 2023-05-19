// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

const frameperSecond = (a, b) =>{
   let frame = 60;
   let result = a * frame * b;
   console.log(result)
  }
  frameperSecond(10, 25)