const mergeSort = (array) => {
  if (array.length < 2) return array;

  const arrayMidpoint = Math.floor(array.length / 2);

  const firstHalf = array.slice(0, arrayMidpoint);

  const secondHalf = array.slice(arrayMidpoint);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  // Merge the sorted halves
  return merge(sortedFirstHalf, sortedSecondHalf);
};

const merge = (firstHalf, secondHalf) => {
  const sortedArrayResult = [];
  let firstHalfIndex = 0;
  let secondHalfIndex = 0;

  while (
    firstHalfIndex < firstHalf.length &&
    secondHalfIndex < secondHalf.length
  ) {
    if (firstHalf[firstHalfIndex] < secondHalf[secondHalfIndex]) {
      sortedArrayResult.push(firstHalf[firstHalfIndex]);
      firstHalfIndex++;
    } else {
      sortedArrayResult.push(secondHalf[secondHalfIndex]);
      secondHalfIndex++;
    }
  }

  while (firstHalfIndex < firstHalf.length) {
    sortedArrayResult.push(firstHalf[firstHalfIndex]);
    firstHalfIndex++;
  }

  while (secondHalfIndex < secondHalf.length) {
    sortedArrayResult.push(secondHalf[secondHalfIndex]);
    secondHalfIndex++;
  }

  return sortedArrayResult;
};

const exampleArray = [3, 2, 1, 13, 8, 5, 0, 1];
const result = mergeSort(exampleArray);
console.log(result);
