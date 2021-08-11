// Array of special characters, to be included in generated passwords
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters, to be included in generated passwords
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lower case characters, to be included in generated passwords
let lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of upper case characters to be included in generated passwords
let upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// This array will contain the types of characters the user has selected
let allChars = [];

// This array will contain one of each type of character included in the 'allChars' array
let haveChars = [];

// The user's input for password length will be pushed to this global variable
let passwordLengthFinal = [];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = window.prompt(
    "How long will your password be? Between 8-128"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Please choose a number between 8 and 128.");
  } else {
    window.alert(`OK! Your password will be ${passwordlength} long.`);
  }

  function lowerCaseLetters() {
    let lowercase = window.confirm(
      "Will your password have lower case letters?"
    );
    if (lowercase === true) {
      allChars.concat(lowerCaseCharacters);
      window.alert("Got it! Your password will include lower case letters.");
    } else {
      window.alert("Got it! No lower case letters will be included.");
    }
  }

  function upperCaseLetters() {
    let uppercase = window.confirm(
      "Will your password have upper case characters?"
    );
    if (uppercase === true) {
      allChars.concat(upperCaseCharacters);
      window.alert(
        "Sounds good! Your password will include upper case letters."
      );
    } else {
      window.alert("Sounds good! No upper case letters will be included.");
    }
  }

  function numericChars() {
    let number = window.confirm("Will your password have numbers?");
    if (number === true) {
      allChars.concat(numericCharacters);
      window.alert("Alright! Your password will include numbers.");
    } else {
      window.alert("Alright! No numbers will be included.");
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
