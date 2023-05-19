// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// output 60°C is 140 °F
// input 45°F is 7.222222222222222°C

const convertTemperatures = () =>{
   
    // converting the farenheit into celsius
    let farenheit =  45;
   let convertTemperature = ((farenheit-32) * 5 ) / 9;
   console.log(convertTemperature, 'Celsius');

   //converting the celsius to farenheit
   let celsius = 60;
   let convertingFarenheit = ((celsius *9) / 5) + 32;
   console.log(convertingFarenheit, 'farenheit');
}
convertTemperatures()


// solve the problem without watching other resources