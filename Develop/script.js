// Assignment code here

// These are the variables for the password criteria
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var specialCharacters = "(~!@#$%^&*_'<>,.?/)-+=`|){}[]:;"

var numbers = "0123456789"



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

  var finalPassword = ""
  console.log(finalPassword)




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

  finalPassword.split("");

var password = ""

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length does not meet requirement")
  return password
}


  for (var i = 0; i < passwordLength; i++) {
    
    

    var randomNumber = Math.floor(Math.random() * finalPassword.length)
    console.log(randomNumber)
    
    password += finalPassword[randomNumber]
  }
  console.log(password)
  return password

  


// newPassword = ""

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
