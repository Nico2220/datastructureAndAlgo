export function longestSubarrayWithSum(array: number[], targetSum: number) {
  let indeces: number[] = [];
  let startingIndex = 0;
  let endingIndex = 0;
  let currentSubArraySum = 0;

  while (endingIndex < array.length) {
    currentSubArraySum += array[endingIndex];
    while (startingIndex < endingIndex && currentSubArraySum > targetSum) {
      currentSubArraySum -= array[startingIndex];
      startingIndex++;
    }

    if (currentSubArraySum === targetSum) {
      if (
        indeces.length === 0 ||
        indeces[1] - indeces[0] < endingIndex - startingIndex
      ) {
        indeces = [startingIndex, endingIndex];
      }
    }
  }
}

const r = longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1], 10);
console.log(r);
