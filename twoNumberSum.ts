// export function twoNumberSum(array: number[], targetSum: number) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const sum = array[i] + array[j];

//       if (sum === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }

//   return [];
// }

export function twoNumberSum(array: number[], targetSum: number) {
  const nums: { [key: string]: boolean } = {};
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [num, potentialMatch];
    }
    nums[num] = true;
  }

  return [];
}
