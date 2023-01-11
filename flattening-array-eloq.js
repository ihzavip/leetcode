let arrays = [[1, 2, 3], [4, 5], [6]];

const solutions = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

// console.log(solutions);
let array1 = [9, 2, 4, 5, 6, 7, 2];
const attempt = array1.reduce((acc, next, index) => acc + next);

let [a, ...rest] = array1;
console.log(a);
console.log(rest);
let [b] = rest;
console.log(b);
console.log(rest);
console.log(attempt);
