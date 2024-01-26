// Define a function called fibsRec which calculates Fibonacci sequence recursively
const fibsRec = (input, index = 0, previous = 0, current = 1) => {
  // Initialize an empty array to store Fibonacci sequence
  let array = [];

  // Base case: If the current index equals the input number, return an empty array
  if (index === input) return array;

  // Add the previous Fibonacci number to the array
  array.push(previous);

  // Recursively call the fibsRec function to generate the next Fibonacci number
  // Update the index, current, and previous values accordingly
  return array.concat(
    fibsRec(input, index + 1, (current = current + previous), previous)
  );
};

// Call the fibsRec function with an input of 8 and log the result to the console
console.log(fibsRec(8));
