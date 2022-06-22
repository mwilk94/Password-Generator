// Assignment code here
var promptNumbers;
var promptSpecialCharacters;
var promptLowerCase;
var promptUpperCase;
var passwordLength;
var personalSelection;

//arrays 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', '<', '>', '/', '?'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Start Function
function generatePassword() {
  
  passwordLength = prompt("Select the number of characters for your password. For a valid password the minimum length is 8 characters and the maximum character amount is 128");
  console.log("Password length " + passwordLength);
  
  
  if(!passwordLength) {
    alert("Enter a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128 characters");
    console.log("Password length " + passwordLength);
  
  } else { 
    promptNumbers = confirm("Select 'okay' if you would like to include numbers");
    console.log("Number " + promptNumbers);

    promptSpecialCharacters = confirm("Select 'okay' if you would like to include special characters?");
    console.log("Special Character " + promptSpecialCharacters);

    promptLowerCase = confirm("Select 'okay' if you would like to include lower case letters?");
    console.log("Lower case " + promptLowerCase);

    promptUpperCase = confirm("Select 'okay' if you would like to include upper case letters?");
    console.log("Upper case " + promptUpperCase);
    
    
  };

 
  if (!promptLowerCase && !promptUpperCase && !promptNumbers && !promptSpecialCharacters) {
    personalSelection = alert("A value must be entered");



  } else if (promptLowerCase && promptUpperCase && promptNumbers && promptSpecialCharacters) {
    personalSelection = lowerCase.concat(upperCase, numbers, specialCharacters);
    console.log(personalSelection);
  }



  else if (promptLowerCase && promptUpperCase && promptNumbers) {
    personalSelection = lowerCase.concat(upperCase, numbers);
    console.log(personalSelection);
  }

  else if (promptLowerCase && promptUpperCase && promptSpecialCharacters) {
    personalSelection = lowerCase.concat(upperCase, specialCharacters);
    console.log(personalSelection);
  }

  else if (promptLowerCase && promptNumbers && promptSpecialCharacters) {
    personalSelection = lowerCase.concat(numbers, specialCharacters);
    console.log(personalSelection);
  }

  else if (promptUpperCase && promptNumbers && promptSpecialCharacters) {
    personalSelection = upperCase.concat(numbers, specialCharacters);
    console.log(personalSelection);
  }
 


  else if (promptLowerCase && promptUpperCase) {
    personalSelection = lowerCase.concat(upperCase);
    console.log(personalSelection);
  }
  else if (promptLowerCase && promptNumbers) {
    personalSelection = lowerCase.concat(numbers);
    console.log(personalSelection);
  }
  else if (promptLowerCase && promptSpecialCharacters) {
    personalSelection = lowerCase.concat(special);
    console.log(personalSelection);
  }
  else if (promptUpperCase && promptNumbers) {
    personalSelection = upperCase.concat(numbers);
    console.log(personalSelection);
  }
  else if (promptUpperCase && promptSpecialCharacters) {
    personalSelection = upperCase.concat(special);
    console.log(personalSelection);
  }
  else if (promptNumbers && promptSpecialCharacters) {
    personalSelection = numbers.concat(special);
    console.log(personalSelection);
  }
 


  else if (promptLowerCase) {
    personalSelection = lowerCase;
    console.log(personalSelection);
  }
  else if (promptUpperCase) {
    personalSelection = blankUpper.concat(upperCase);
    console.log(personalSelection);
  }
  else if (promptNumbers) {
    personalSelection = numbers;
    console.log(personalSelection);
  }
  else if (promptSpecialCharacters) {
    personalSelection = special;
    console.log(personalSelection);
  };



  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allPrompts = personalSelection[Math.floor(Math.random() * personalSelection.length)];
    passwordBlank.push(allPrompts);
    console.log(allPrompts);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}
