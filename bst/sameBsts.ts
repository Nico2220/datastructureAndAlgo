export function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne.length !== arrayTwo.length) return false;

  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;

  if (arrayOne[0] !== arrayTwo[0]) return false;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array: number[]) {
  const smallers = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smallers.push(array[i]);
  }
  return smallers;
}

function getBiggerOrEqual(array: number[]) {
  const biggerOrEqual = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }

  return biggerOrEqual;
}

console.log(
  sameBsts([10, 15, 8, 20, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
);
