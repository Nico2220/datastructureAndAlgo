// export function missingNumbers(nums: number[]) {
//   const numSet = new Set(nums);
//   const result: number[] = [];
//   for (let i = 1; i < nums.length + 2 + 1; i++) {
//     if (!numSet.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

export function missingNumbers(nums: number[]) {
  let totalSum = 0;
  for (let i = 1; i <= nums.length + 2; i++) {
    totalSum += i;
  }

  let numsSum = 0;
  for (let i = 0; i < nums.length; i++) {
    numsSum += nums[i];
  }

  let averageMissing = Math.floor((totalSum - numsSum) / 2);

  console.log(averageMissing);

  let leftSumOfAverage = 0;
  let rightSumOfAverage = 0;
  for (let i = 1; i <= averageMissing; i++) {
    leftSumOfAverage += i;
  }

  for (let i = averageMissing + 1; i <= nums.length + 2; i++) {
    rightSumOfAverage += i;
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= averageMissing) {
      leftSum += nums[i];
    } else {
      rightSum += nums[i];
    }
  }

  return [leftSumOfAverage - leftSum, rightSumOfAverage - rightSum];
}

const r = missingNumbers([1, 4, 3, 5]);
console.log(r);
