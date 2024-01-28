// function twoNumberSum(array: number[], targetSum: number) {
//   const seen: { [key: number]: boolean } = {};

//   for (const value of array) {
//     const potentialValue = targetSum - value;
//     if (seen.hasOwnProperty(potentialValue)) {
//       return [value, potentialValue];
//     }
//     seen[value] = true;
//   }

//   return [];
// }

function twoNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const sum = array[leftPointer] + array[rightPointer];

    if (sum === targetSum) {
      return [array[leftPointer], array[rightPointer]];
    }

    if (sum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
