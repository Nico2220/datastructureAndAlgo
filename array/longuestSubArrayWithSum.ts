export function longestSubarrayWithSum(array: number[], targetSum: number) {
  let indeces: number[] = [];
  let startIndex = 0;
  //   let endIndex = 0;
  let currentSum = 0;
  for (let endIndex = 0; endIndex < array.length; endIndex++) {
    currentSum += array[endIndex];

    if (currentSum > targetSum) {
      while (startIndex < endIndex && currentSum > targetSum) {
        currentSum -= array[startIndex];
        startIndex += 1;
      }
    }

    if (currentSum === targetSum) {
      if (
        indeces.length === 0 ||
        indeces[1] - indeces[0] < endIndex - startIndex
      ) {
        indeces = [startIndex, endIndex];
      }
    }

    // endIndex += 1;
  }

  return indeces;
}

console.log(longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1], 10));
