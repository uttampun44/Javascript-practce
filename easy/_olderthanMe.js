//Older Than Me
// Create a method in the Person class which returns how another person's age compares. 
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)


const olderthanMe = (name, age) =>{
     let myName = "uttam pun";
     let myAge   = 31;

     if(myAge > age){
        return "Samuel is younger than me"
     }else{
        return "samuel is older than me"
     }

 }
 let checkResult = olderthanMe("samuel", 24)
 console.log(checkResult)