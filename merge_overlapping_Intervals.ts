export function mergeOverlappingIntervals(array: number[][]) {
  const sortedArray = array.sort((a, b) => a[0] - b[0]);
  const mergedInterval: [number, number] = [0, 0];
  const result: number[][] = [];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const [currentIntervalVal0, currentIntervalVal1] = sortedArray[i];
    const [nextInervalVal0, nextIntervalVal1] = sortedArray[i + 1];
    if (currentIntervalVal1 >= nextIntervalVal1) {
      mergedInterval[0] = Math.min(currentIntervalVal0, nextInervalVal0);
      mergedInterval[1] = Math.max(nextIntervalVal1, nextIntervalVal1);
    } else {
      result.push(sortedArray[i]);
    }
  }

  return result;
}
