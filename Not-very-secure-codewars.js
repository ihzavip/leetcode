/*
*In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
* */

let str = "kua";
console.log(alphanumeric(str));
function alphanumeric(string) {
  //your code here
  // loop through the letter
  // then check if there's whitespace/underscore
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || "_") {
      i++;
      return false;
    } else {
      return true;
    }
  }
}
