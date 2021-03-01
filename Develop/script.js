// Assignment code here

// These are the four different variables that are needed for the password criteria
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var specialCharacters = "(~!@#$%^&*_'<>,.?/)-+=`|){}[]:;"

var numbers = "0123456789"


// This function called 'generatePassword' includes prompt and confirm functions that ask the user for password criteria
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? (pick a number between 8 and 128)")
  console.log(passwordLength)

  var includeUpper = confirm("Would you like to include uppercase letters?")
  console.log(includeUpper)

  var includeLower = confirm("Would you like to include lowercase letters?")
  console.log(includeLower)

  var includeSpecial = confirm("Would you like to include special characters?")
  console.log(includeSpecial)

  var includeNumbers = confirm("Would you like to include numbers?")
  console.log(includeNumbers)

  // This 'empty string' variable will soon be filled in with the various password criteria that the user selects
  var finalPassword = ""
  console.log(finalPassword)


  // These 'if statements' determine whether or not the variables will be included in the password generation
  // Basically, if the confirm functions read 'true', then the corresponding variable (uppercase letters, special characters, etc) will be added to the finalPassword string
  if (includeNumbers) {
    finalPassword += numbers

  }
  console.log(finalPassword)

  if (includeUpper) {
    finalPassword += uppercaseLetters
  }
  console.log(finalPassword)

  if (includeLower) {
    finalPassword += lowercaseLetters
  }
  console.log(finalPassword)

  if (includeSpecial) {
    finalPassword += specialCharacters
  }
  console.log(finalPassword)


  // This .split method converts the finalPassword string into an array, allowing the future for loop to loop through
  finalPassword.split("");

  // This variable will be returned if the password length doesn't meet the criteria
  // It will be used to return an empty value so that the user cannot generate a password that is outside of the length criteria
  var password = ""

  // This if statement will alert the user that their password length does not meet the requirement
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length does not meet requirement")
  return password
  }

  // This for loop will continue to loop until it meets the specified password length
  for (var i = 0; i < passwordLength; i++) {
    
    // This variable will generate a random number that is based on the length of the array 'finalPassword'
    var randomNumber = Math.floor(Math.random() * finalPassword.length)
    console.log(randomNumber)
    
    // This effectively uses the randomNumber to generate a random value from the array finalPassword
    // This will continue to loop until it reaches the password length criteria
    password += finalPassword[randomNumber]
  }
  console.log(password)
  return password

};






















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
