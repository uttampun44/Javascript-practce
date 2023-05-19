// /Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

const leapYear = () =>{
   let date = Date();
   console.log(date)

   if((date % 4 == 0) || (date % 100 == 0) || (date % 400 ==0)){
     console.log("this is a leap year")
   }else{
    console.log("Not a leap year");
   }
}
leapYear()


// question solved