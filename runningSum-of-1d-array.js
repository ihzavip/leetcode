function runningSum(index) {
  for (let i = 0; i < index.length; i++) {
    if (i === 0) {
      i++;
    }
    index[i] += index[i - 1];
  }
  return index;
}

let array1 = [1, 2, 3, 4];
console.log(runningSum(array1));
console.log("optimize later");
