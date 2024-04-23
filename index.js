// Write a JavaScript function that accepts an argument and returns the type.
function dataType(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    if (typeof value === "object" || typeof value === "function") {
      for (x = 0, len = dtypes.length; x < len; x++) {
        if (value instanceof dtypes[x]) {
          return dtypes[x];
        }
      }
    }
    return typeof value;
  }
  
  console.log(dataType(12));
  console.log(dataType('Welcome To Clarusway'));
  console.log(dataType(false)); 

///////////////////////////////////////////////////////////////////////////
  // Write a JS code to display Perfect Numbers from 1 to 1000.
  function isPerfectNumber(n) {
 
    if (!Number.isInteger(n) || n <= 0) {
        console.log("Please provide a valid positive integer.");
        return false;
    }
 
    let sum = 0;
 
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
 
    const isPerfect = sum === n;
 
    if (isPerfect) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }
 
    return isPerfect;
}
 
isPerfectNumber(31);
isPerfectNumber(6);

/////////////////////////////////////////////////////////////////

// Write a JavaScript function to extract a specified number of characters from a string.
takeFromString = function (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(takeFromString("Robin Singh",4));

////////////////////////////////////////////////////////////////////
// Write a JavaScript function that generates a string id (specified length) of random characters.

function makeid(l) {
    var text = "";
    
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
  
    return text;
  }
  
  console.log(makeid(8)); 

  ///////////////////////////////////////////////////////////////////
  // Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
 
  var maxNumber = 100;
  var counter = 0;
  var maxTries = 4;
  var attempts;
  
  var randomNumber = Math.floor(Math.random() * maxNumber) +1;

function showResult(){
  while (attempts  !== randomNumber) {
    var attempts = prompt ("Please pick a number between 1 and " + maxNumber);
    counter += 1;
    if (counter > maxTries) {
      document.write('You have no more tries left. Press F5 to play again.')
      break
    }
    if (attempts == randomNumber) {
      document.write('Congratulations! You found the correct number in ' + counter + ' attempts!');
      document.write('<p>The random number was ' + randomNumber + '!</p>');
      
    }
  
  }
  document.getElementById("result").innerHTML = "Program complete"
}

showResult()