type Quadruplet = [number, number, number, number];
export function fourNumberSum(array: number[], targetSum: number) {
  const quadruplets: Quadruplet[] = [];
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        for (let l = k + 1; l < array.length; l++) {
          const sum = array[i] + array[j] + array[k] + array[l];

          if (sum === targetSum) {
            quadruplets.push([array[i], array[j], array[k], array[l]]);
          }
        }
      }
    }
  }
  return quadruplets;
}
