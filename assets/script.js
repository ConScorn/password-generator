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

// This array contains all characters, in all 4 arrays
// let allChars = [
//   lowerCaseCharacters,
//   upperCaseCharacters,
//   numericCharacters,
//   specialCharacters,
// ];

// This array will contain the types of characters the user has selected
let possibleChars = [];

// This array will contain one of each type of character included in the 'allChars' array
let haveChars = [];

// The user's input for password length will be pushed to this global variable
let passwordLengthFinal = [];

function randChar(array) {
  let index = Math.floor(Math.random() * array.length);
  console.log(index);
  return array[index];
}

function generatePassword() {
  let password = [];

  let passwordLength = window.prompt(
    "How long will your password be? Between 8-128"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Please choose a number between 8 and 128.");
  } else {
    window.alert(
      `OK! Your password will be ${passwordLength} characters long.`
    );
    passwordLengthFinal.push(passwordLength);
  }

  function lowerCaseLetters() {
    let lowercase = window.confirm(
      "Will your password have lower case letters?"
    );
    if (lowercase === true) {
      possibleChars.push(...lowerCaseCharacters);
      haveChars.push(randChar(lowerCaseCharacters));
      console.log(haveChars);
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
      possibleChars.push(...upperCaseCharacters);
      haveChars.push(randChar(upperCaseCharacters));
      console.log(haveChars);
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
      possibleChars.push(...numericCharacters);
      haveChars.push(randChar(numericCharacters));
      console.log(haveChars);
      window.alert("Alright! Your password will include numbers.");
    } else {
      window.alert("Alright! No numbers will be included.");
    }
  }

  function specialChars() {
    let special = window.confirm("Will your password have special characters?");
    if (special === true) {
      possibleChars.push(...specialCharacters);
      haveChars.push(randChar(specialCharacters));
      console.log(possibleChars);
      window.alert(
        "No Problem! Your password will include special characters."
      );
    } else {
      window.alert("No Problem! No special characters will be included.");
    }
  }

  upperCaseLetters();
  lowerCaseLetters();
  numericChars();
  specialChars();

  for (let i = 0; i < passwordLengthFinal; i++) {
    password.push(randChar(possibleChars));
    console.log(possibleChars);
  }
  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
