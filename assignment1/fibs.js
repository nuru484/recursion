// Define a function called fibs that takes a single parameter called input
const fibs = (input) => {
  // Initialize an empty array to store Fibonacci sequence
  let array = [];
  // Initialize variables to store current and previous Fibonacci numbers
  let currentNumber = 1; // Start with the first Fibonacci number
  let previousNumber = 0;

  // Loop through 'input' number of times to generate Fibonacci sequence
  for (let i = 0; i < input; i++) {
    // Push the current Fibonacci number to the array
    array.push(previousNumber);
    // Calculate the next Fibonacci number
    let nextNumber = currentNumber + previousNumber;
    // Update previous and current numbers for the next iteration
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  // Return the array containing the Fibonacci sequence
  return array;
};

// Call the fibs function with input value 8 and log the result to the console
console.log(fibs(8));
