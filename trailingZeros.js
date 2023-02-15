// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
// JavaScript program to count
// trailing 0s in n!

// Function to return trailing
// 0s in factorial of n
function findTrailingZeros(n) {

  if (n < 0) //Negative Number Edge Case
    return -1;

  // Initialize result
  let count = 0;

  // Keep dividing n by powers of
  // 5 and update count
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
    count += Math.floor(n / i);

  return count;
}

// Driver Code
let n = 100;
console.log(findTrailingZeros(100))

// This code is contributed by Surbhi Tyagi


