function majorityElement(arr: number[]) {
  let pointerOne = 0;
  let pointerTwo = 0;
  let count = 0;

  while (pointerOne < arr.length && pointerTwo < arr.length) {
    if (arr[pointerOne] === arr[pointerTwo]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      pointerOne = pointerTwo + 1;
    }

    pointerTwo++;
  }

  let count2 = 0;

  if (count > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[pointerOne]) {
        count2++;
      }

      if (count2 > Math.floor(arr.length / 2)) {
        return arr[pointerOne];
      }
    }
  }

  return -1;
}

console.log(majorityElement([2, 2, 1, 3, 1, 1, 3, 1, 1]));
