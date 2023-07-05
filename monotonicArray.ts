export function monotonicArray(array: number[]) {
  let direction = 0;
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    const secondNum = array[i + 1];

    if (firstNum !== secondNum) {
      if (direction === 0) {
        direction = secondNum - firstNum;
      }

      if (direction > 0 && firstNum > secondNum) return false;
      if (direction < 0 && firstNum < secondNum) return false;
    }
  }

  return true;
}
