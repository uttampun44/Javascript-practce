// Create a function that takes an angle in radians and returns the corresponding angle in degrees.
// Example
// radiansToDegrees(1) ➞ 57.29577951308232
// radiansToDegrees(20) ➞ 1145.9155902616465
// radiansToDegrees(50) ➞ 2864.7889756541163

function radiansToDegrees(a){
   let pi =  Math.PI
    let result = a * (180 / pi)
    console.log(result)
 }
 radiansToDegrees(1)

 const radiansDegree = (x) =>{
   
      let pie = Math.PI;
       let res =  x * (180 / pie)
       return res
 }
 let checkResult = radiansDegree(20)
 console.log(checkResult)

