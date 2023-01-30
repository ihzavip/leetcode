// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15

function add(n) {
  return (args) => {
    console.log(args);
    console.log(n);
    return n + args;
  };
}

function add2(n) {
  const func = (x) => add(n + x);
  func.valueOf = () => n;
  return func;
}

console.log(add2(1)(2));
