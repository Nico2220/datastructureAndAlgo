function largestNumber(array: number[]) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

console.log(largestNumber([3, 1, 6, 2, 6, 4]));
