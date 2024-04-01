function isSorted(a: number[], n: number) {
  for (let i = 1; i < n; i++) {
    if (a[i] < a[i - 1]) {
      return 0;
    }
  }
  return 1;
}
