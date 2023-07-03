export function longestPeak(array: number[]) {
  // Write your code here.
  let i = 1;
  let longestPeak = 0;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx <= array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentLongestPeak = rightIdx - leftIdx - 1;
    longestPeak = Math.max(currentLongestPeak, longestPeak);
    i = rightIdx;
  }

  return longestPeak;
}
