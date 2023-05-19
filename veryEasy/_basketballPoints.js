// You are counting points for a basketball game, 
// given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.
// input 2 and 5

const basketballPoints = (twoPointers, threePointers) =>{
   let result =  ((twoPointers * 2) + (threePointers * 3));
   console.log(result);
 }
basketballPoints(7, 5)