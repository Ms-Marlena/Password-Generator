// Assignment Code
var generateBtn = document.querySelector("#generate");
// var passwordText = []
// var passwordCharType =

let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = [
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
let upperCase = lowerCase.map((el) => el.toUpperCase());
let specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

let passwordCriteria = [];
let password = "";

function passwordLength() {
  return window.prompt(
    "Enter your desired password length (a number from 8-128)"
  );
}

// Write password to the #password input
function writePassword() {
  const specialCharacters = confirm(
    "Would you like to include special characters?"
  );
  if (specialCharacters) {
    passwordCriteria.push(specialChars);
  }
  // console.log(passwordCriteria);

  const chooseNumbers = confirm("Would you like to include numbers?");
  if (chooseNumbers) {
    passwordCriteria.push(numeric);
  }
  // console.log(passwordCriteria);

  const chooseLowercase = confirm(
    "Would you like to include lowercase letters?"
  );
  if (chooseLowercase) {
    passwordCriteria.push(lowerCase);
  }
  // console.log(passwordCriteria);

  const chooseUppercase = confirm(
    "Would you like to include uppercase letters?"
  );
  if (chooseUppercase) {
    passwordCriteria.push(upperCase);
  }

  console.log(passwordCriteria);
  const length = window.prompt(
    "Enter your desired password length (a number from 8-128)"
  );

  if (length >= 8 && length <= 128) {
    for (i = 0; i < length; i++) {
      const currentCriteriaArray =
        passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];

      const currentChar =
        currentCriteriaArray[
          Math.floor(Math.random() * currentCriteriaArray.length)
        ];

      password += currentChar;
    }

    console.log(password);
    document.getElementById("password").innerHTML = password;
  } else {
    window.alert("Please enter a number between 8 and 128.");
  }

  console.log(length);
}

generateBtn.addEventListener("click", writePassword);
