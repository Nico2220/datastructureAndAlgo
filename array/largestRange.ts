export function largestRange(array: number[]): [number, number] {
  const nums: { [key: number]: boolean } = {};
  let longest = 0;
  let result: [number, number] = [0, 0];
  for (const num of array) {
    nums[num] = true;
  }

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (nums[value]) {
      nums[value] = false;
      let leftBound = value - 1;
      while (leftBound in nums) {
        nums[leftBound] = false;
        leftBound--;
      }

      let rightBound = value + 1;
      while (rightBound in nums) {
        nums[rightBound] = false;
        rightBound++;
      }

      const newLongest = rightBound - leftBound;
      if (newLongest > longest) {
        longest = newLongest;
        result = [leftBound + 1, rightBound - 1];
      }
    }
  }

  return result;
}

const r = largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
console.log(r);
