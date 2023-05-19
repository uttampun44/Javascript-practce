// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7
// ouput = 14.696938

const area = () =>{
  let a = 5;
  let b = 6;
  let c = 7;
  let totalArea = (a+b+c) /  2;
  let areas = Math.sqrt(totalArea * ((totalArea-a)*(totalArea-b)*(totalArea-c)))
  console.log(areas)
}
area()

// question not solved fully help by other answers