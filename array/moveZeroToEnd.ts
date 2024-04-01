function moveZeroToEnd(n: number, a: number[]) {
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  if (j == -1) return a;

  for (let i = j + 1; i < n; i++) {
    if (a[i] != 0) {
      swap(i, j, a);
    }
  }
  return a;
}

function swap(i: number, j: number, a: number[]) {
  let temp = a[j];
  a[j] = a[i];
  a[i] = temp;
}
