export function removeIslands(matrix: number[][]) {
  const onesConnectedToBorder: boolean[][] = matrix.map((row) =>
    row.map((col) => false)
  );

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;

      if (!isBorder) continue;

      if (matrix[row][col] != 1) continue;

      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
    }
  }

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (onesConnectedToBorder[row][col]) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
}

function findOnesConnectedToBorder(
  matrix: number[][],
  startRow: number,
  startCol: number,
  oneConnectedToBorder: boolean[][]
) {
  const stack = [[startRow, startCol]];
  while (stack.length > 0) {
    const currentPosition = stack.pop()!;
    const [currentRow, currentCol] = currentPosition;

    const alreadyVisited = oneConnectedToBorder[currentRow][currentCol];
    if (alreadyVisited) continue;

    oneConnectedToBorder[currentRow][currentCol] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);

    for (let neighbor of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] != 1) continue;

      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix: number[][], row: number, col: number) {
  const neighbors: number[][] = [];
  if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
  if (row + 1 < matrix.length) neighbors.push([row + 1, col]); // DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT
  if (col + 1 < matrix[row].length) neighbors.push([row, col + 1]); // RIGHT

  return neighbors;
}

console.log(
  removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ])
);
