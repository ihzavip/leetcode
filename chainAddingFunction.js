// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15

function add(n) {
  const sum = function (y) {
    return add(n + y);
  };
  sum.valueOf = function () {
    return n;
  };
  return sum;
}

// console.log(add(1)(2)(3)(4));
console.log(add(3));
