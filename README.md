# The Odin Project Recursion Assignment

This is a solution to the Odin Project Recursion assignment. It is in 2 parts, assignment 1 and 2.

## Iterative Fibonacci Sequence Generator

This is a solution to generate an array of Fibonacci sequence elements using iteration.

### Function to Implement:

#### `fibs(n)`

**Description:**
Generates an array containing the first `n` numbers from the Fibonacci sequence using iteration.

**Parameters:**

- `n` (Number): The number of Fibonacci sequence elements to generate.

**Returns:**

- An array containing the first `n` numbers from the Fibonacci sequence.

### Example

```javascript
// Example usage of the fibs function
const result = fibs(8);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## Recursive Fibonacci Sequence Generator

This is a solution to generate an array of Fibonacci sequence elements using recursion.

### Function to Implement:

### `fibsRec(n)`

**Description:**
Generates an array containing the first `n` numbers from the Fibonacci sequence using recursion.

**Parameters:**

- `n` (Number): The number of Fibonacci sequence elements to generate.

**Returns:**

- An array containing the first `n` numbers from the Fibonacci sequence.

### Example

```javascript
// Example usage of the fibsRec function
const result = fibsRec(8);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## Recursive Merge Sort

This is a solution to implement the merge sort algorithm recursively.

### Function to Implement:

### `mergeSort(array)`

**Description:**
Sorts an array using the recursive merge sort methodology.

**Parameters:**

- `array` (Array): The array to be sorted.

**Returns:**

- A sorted array.

### Example

```javascript
// Example usage of the mergeSort function
const result1 = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(result1); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

const result2 = mergeSort([105, 79, 100, 110]);
console.log(result2); // Output: [79, 100, 105, 110]
```
