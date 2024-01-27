// Merge Sort Algorithm
const mergeSort = (array) => {
  // Base case: If the array has one or zero elements, it is already sorted
  if (array.length < 2) return array;

  // Finding the midpoint of the array
  const arrayMidpoint = Math.floor(array.length / 2);

  // Splitting the array into two halves
  const firstHalf = array.slice(0, arrayMidpoint);
  const secondHalf = array.slice(arrayMidpoint);

  // Recursively sort each half
  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  // Merging the sorted halves
  return merge(sortedFirstHalf, sortedSecondHalf);
};

// Merge Function: Combines two sorted arrays into one sorted array
const merge = (firstHalf, secondHalf) => {
  // Array to store the sorted elements
  const sortedArrayResult = [];
  // Index pointers for both halves
  let firstHalfIndex = 0;
  let secondHalfIndex = 0;

  // Iterate through both arrays and compare elements
  while (
    firstHalfIndex < firstHalf.length &&
    secondHalfIndex < secondHalf.length
  ) {
    // If element in the first half is smaller, add it to the result
    // Otherwise, add element from second half
    if (firstHalf[firstHalfIndex] < secondHalf[secondHalfIndex]) {
      sortedArrayResult.push(firstHalf[firstHalfIndex]);
      firstHalfIndex++;
    } else {
      sortedArrayResult.push(secondHalf[secondHalfIndex]);
      secondHalfIndex++;
    }
  }

  // Add remaining elements from the first half, if any
  while (firstHalfIndex < firstHalf.length) {
    sortedArrayResult.push(firstHalf[firstHalfIndex]);
    firstHalfIndex++;
  }

  // Add remaining elements from the second half, if any
  while (secondHalfIndex < secondHalf.length) {
    sortedArrayResult.push(secondHalf[secondHalfIndex]);
    secondHalfIndex++;
  }

  // Return the sorted array
  return sortedArrayResult;
};

// Example array to be sorted
const exampleArray = [3, 2, 1, 13, 8, 5, 0, 1];
// Sorting the example array using merge sort
const result = mergeSort(exampleArray);
// Printing the sorted result
console.log(result);
