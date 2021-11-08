// Assignment code here
var enter;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
var choices;
character = ["!", "@", "#", "$", "%", "%", "^", "&", "*", "(", ")", "[", "]", "~", "<", ">"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  enter = window.prompt("How many characters would you like your password to be? Please choose between 8 & 128");
  if(!enter){
    alert("Please enter Value")
  }
  else if(enter < 8 || enter > 128){
    window.prompt("Must be between 8 & 128")
  }
  else{
    confirmNum = confirm("Will this contain numbers?");
    confirmChar = confirm("Will this contain special characters?");
    confirmUpper = confirm("Will this contain Uppercase letters?");
    confirmLower = confirm("Will this contain lowercase letters?");
  };
  if(!confirmNum && !confirmChar && !confirmUpper && !confirmLower){
    choices = alert("You must select an option");
  }
  else if (confirmChar && confirmNum && confirmUpper && confirmLower) {
    choices = character.concat(number, alpha, upperAlpha);
  }
  else if (confirmChar && confirmNum && confirmUpper) {
    choices = character.concat(number, upperAlpha);
  }
  else if (confirmChar && confirmNum && confirmLower) {
    choices = character.concat(number, alpha);
  }
  else if (confirmChar && confirmLower && confirmUpper) {
    choices = character.concat(alpha, upperAlpha);
  }
  else if (confirmNum && confirmLower && confirmUpper) {
    choices = number.concat(alpha, upperAlpha);
  }
  else if (confirmChar && confirmNum) {
    choices = character.concat(number);

  } 
    else if (confirmChar && confirmLower) {
    choices = character.concat(alpha);

  } 
    else if (confirmChar && confirmUpper) {
    choices = character.concat(upperAlpha);
  }
    else if (confirmLower && confirmNum) {
    choices = alpha.concat(number);

  } 
  else if (confirmLower && confirmUpper) {
    choices = alpha.concat(upperAlpha);

  } 
  else if (confirmNum && confirmUpper) {
    choices = number.concat(upperAlpha);
  }
  else if (confirmChara) {
    choices = character;
  }
  else if (confirmNum) {
    choices = number;
  }
  else if (confirmLower) {
    choices = alpha;
  }
  else if (confirmUpper){
    choices = upperAlpha;
  }

  var password = [];
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);  
  }
  var psswrd = password.join("");
    UserInput(psswrd);
    return psswrd;
}
function UserInput(psswrd) {
  document.getElementById("password").textContent = psswrd;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
