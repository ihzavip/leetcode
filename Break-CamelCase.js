//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let holder = ''
  for (letter of string) {
    if (letter == letter.toUpperCase()) {
      holder += ' '
      holder += letter
    } else {
      holder += letter
    }
  }
  return holder
}

function solution2(string) {
  // We start by taking the input string and splitting it into an array of individual characters
  string = string.split('').map(el => {
    // For each character, we check if it's an uppercase letter
    if (el === el.toUpperCase()) {
      // If it is uppercase, we add a space in front of it by changing the character to a string with a space and the original character
      el = ' ' + el
    }
    // We return the modified character (with a space in front if it was uppercase) or the original character (if it wasn't uppercase)
    return el
  })
  // Finally, we join all the characters back into a string and return the modified string
  return string.join('')
}

console.log(solution('hujanAir'))
console.log(solution2('thisIsCamelCase'))
