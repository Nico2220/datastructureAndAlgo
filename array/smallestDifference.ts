function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;
  let smallest = Infinity;
  let absDiff = Infinity;
  let result: [number, number] = [0, 0];
  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    const valueOne = arrayOne[pointerOne];
    const valueTwo = arrayTwo[pointerTwo];
    if (valueOne < valueTwo) {
      absDiff = valueTwo - valueOne;
      pointerOne++;
    } else if (valueOne > valueTwo) {
      absDiff = valueOne - valueTwo;
      pointerTwo++;
    } else {
      return [valueOne, valueTwo];
    }

    if (absDiff < smallest) {
      smallest = absDiff;
      result = [valueOne, valueTwo];
    }
  }
  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
