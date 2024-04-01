function removeDuplicates(arr: number[], n: number) {
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] === arr[j]) {
      continue;
    } else {
      arr[i + 1] = arr[j];
      i = i + 1;
    }
  }
  return i + 1;
}
