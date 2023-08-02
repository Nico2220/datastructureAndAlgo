type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b);
  const triplets: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) {
    let leftIdx = i + 1;
    let rightIdx = array.length - 1;
    while (leftIdx < rightIdx) {
      const currentSum = array[i] + array[leftIdx] + array[rightIdx];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftIdx], array[rightIdx]]);
        leftIdx++;
        rightIdx--;
      } else if (currentSum < targetSum) {
        leftIdx++;
      } else {
        rightIdx--;
      }
    }
  }

  return triplets;
}
