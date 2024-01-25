const fibs = (input) => {
  let array = [];
  let currentNumber = 1; // Start with the first Fibonacci number
  let previousNumber = 0;
  for (let i = 0; i < input; i++) {
    array.push(previousNumber);
    let nextNumber = currentNumber + previousNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
  return array;
};

console.log(fibs(8));
