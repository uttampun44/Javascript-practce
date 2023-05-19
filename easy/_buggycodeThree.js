// Emmy has written a function that returns a greeting to users. 
// However, she's in love with Mubashir, and would like to greet him slightly differently.
//  She added a special case in her function, but she made a mistake.
// Can you help her?

// greeting("Matt") ➞ "Hello, Matt!"
// greeting("Helen") ➞ "Hello, Helen!"
// greeting("Mubashir") ➞ "Hello, my Love!"

const greeting = (name) =>{
   let hello = "Hello, my love!"
  if(name == "Mubashir") {
    return hello
   }
  }
let checkResult =  greeting("Mubashir")
console.log(checkResult)