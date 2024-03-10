
// Assignment code here
function createPassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

  //Collecting password information
  var hasLowercase = confirm("Would you like any lowercase letters in your password?");
  var hasCapitals = confirm("Would you like any capital letters in your password?");
  var hasNumbers = confirm("Would you like any numbers in your password?");
  var hasSpecialChars = confirm("Would you like any special characters in your password?");
  if (!(hasLowercase || hasCapitals || hasNumbers || hasSpecialChars)) {
    return createPassword();
  }

  //Password length selection (8-128 characters)
  var passLength = prompt("How many characters long would you like your password to be? (8-128)");
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Select a password length between 8 and 128");
  }

  //Putting possible characters into a single string
  var allChars = "";
  var password = "";
  let startIndex = 0;
  if (hasLowercase) {
    allChars += lowercaseLetters;
    password += lowercaseLetters[getRandomNumber(lowercaseLetters.length - 1)];
    startIndex++;
  }
  if (hasCapitals) {
    allChars += capitalLetters;
    password += capitalLetters[getRandomNumber(capitalLetters.length - 1)];
    startIndex++;
  }
  if (hasNumbers) {
    allChars += numbers;
    password += numbers[getRandomNumber(numbers.length - 1)];
    startIndex++;
  }
  if (hasSpecialChars) {
    allChars += specialChars;
    password += specialChars[getRandomNumber(specialChars.length - 1)];
    startIndex++;
  }

  //Generating password based on users choices
  for (i = startIndex; i < passLength; i++) {
    password += allChars[getRandomNumber(allChars.length)];
  }
  return password;
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);