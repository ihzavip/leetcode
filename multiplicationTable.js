// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  let res = []
  for (let i = 1; i <= size; i++) {
    let row = []
    for (let j = 1; j <= size; j++) {
      // for every i * j that <= size, make their own array
        row.push(i * j)
    }
    res.push(row)
  }
  return res
}
console.log(multiplicationTable(4))
