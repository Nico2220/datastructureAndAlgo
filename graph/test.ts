let sum = 0;
function test1(n: number) {
  if (n < 1) return;
  sum += n;
  test1(n - 1);
  return sum;
}

console.log(test1(3));
