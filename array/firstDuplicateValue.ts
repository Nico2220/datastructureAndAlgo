// function firstDuplicateValue(array: number[]) {
//   const seen = new Set();
//   for (const value of array) {
//     if (seen.has(value)) {
//       return value;
//     }
//     seen.add(value);
//   }

//   return -1;
// }

function firstDuplicateValue(array: number[]) {
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) {
      return absValue;
    }
    array[absValue - 1] *= -1;
  }
  return -1;
}
console.log(firstDuplicateValue([2, 1, 5, 1, 3, 3, 4]));
