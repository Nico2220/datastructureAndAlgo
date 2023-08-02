export function spiralTraverse(array: number[][]): number[] {
  const output: number[] = [];
  const col = array[0].length;
  const row = array.length;

  for (let i = 0; i < col; i++) {
    output.push(array[0][i]);
  }

  for (let i = 1; i < row; i++) {
    output.push(array[i][row - 1]);
  }

  for (let i = col - 2; i > -1; i--) {
    output.push(array[row - 1][i]);
  }

  for (let i = row - 2; i > -0; i--) {
    output.push(array[i][0]);
  }
  return output;
}
