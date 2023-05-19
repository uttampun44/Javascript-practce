// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
// w3resource

// answer 0 remove

function removeChar(){

    let chars = "w3resource";
     let check = chars.split('');
      let target = 5;
     console.log(check)
      for(let i = target; i<check.length; i++){
           check[i] = check[i+1];
      }
        check.length = check.length -1
        console.log(check)
}
removeChar()


function removeString(){

  }
removeString()