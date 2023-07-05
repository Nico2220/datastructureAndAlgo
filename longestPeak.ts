export function longestPeak(array: number[]) {
  let finalLoguestPeak = 0;
  let leftIdx = 0;
  let rigthIdx = 0;

  for (let i = 0; i < array.length - 1; i++) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (isPeak) {
      leftIdx = i - 2;
      while (leftIdx > 0 && array[leftIdx] < array[leftIdx - 1]) {
        leftIdx--;
      }

      rigthIdx = i + 2;
      while (rigthIdx < array.length && array[rigthIdx] < array[rigthIdx - 1]) {
        rigthIdx++;
      }
    }

    const currentLonguestPeak = rigthIdx - leftIdx - 1;
    finalLoguestPeak = Math.max(currentLonguestPeak, finalLoguestPeak);
  }

  console.log(finalLoguestPeak);

  return finalLoguestPeak;
}
