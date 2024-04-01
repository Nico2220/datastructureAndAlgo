function secondLargestNumber(array: number[]) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondLargest && array[i] != largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestNumber([3, 1, 6, 2, 6, 4]));
