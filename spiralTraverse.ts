export function spiralTraverse(array: number[][]): number[] {
  const output: number[] = [];

  let startCol = 0;
  let endCol = array[0].length - 1;

  let startRow = 0;
  let endRow = array.length - 1;

  while (startRow < endRow && startCol < endCol) {
    for (let i = startCol; i <= endCol; i++) {
      output.push(array[startRow][i]);
    }

    for (let i = startRow + 1; i <= endRow; i++) {
      output.push(array[i][endCol]);
    }

    for (let i = endCol - 1; i >= startCol; i--) {
      output.push(array[endRow][i]);
    }

    for (let i = endRow - 1; i >= startRow + 1; i--) {
      output.push(array[i][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;``
  }

  return output;
}
