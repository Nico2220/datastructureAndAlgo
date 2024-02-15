export function removeIslands(matrix: number[][]) {
  const onesConnectedToBorders = matrix.map((row) => row.map((col) => false));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const isRowBorder = row === 0 || row === matrix.length - 1;
      const isColBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = isRowBorder || isColBorder;

      if (!isBorder) continue;

      if (matrix[row][col] != 1) continue;

      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorders);
    }
  }

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (!onesConnectedToBorders[row][col] && matrix[row][col] === 1) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
}

function findOnesConnectedToBorder(
  matrix: number[][],
  row: number,
  col: number,
  visited: boolean[][]
) {
  const queue = [[row, col]];
  visited[row][col] = true;
  while (queue.length > 0) {
    const currentPosition = queue.shift()!;
    const [currentRow, currentCol] = currentPosition;

    const unvisitedNeighbors = getUnvisitedNeighbors(
      matrix,
      currentRow,
      currentCol,
      visited
    );
    for (const neighbor of unvisitedNeighbors) {
      const [i, j] = neighbor;
      if (matrix[i][j] !== 1) continue;
      queue.push(neighbor);
      visited[i][j] = true;
    }
  }
}

function getUnvisitedNeighbors(
  matrix: number[][],
  row: number,
  col: number,
  visited: boolean[][]
) {
  const unvisitedNeighbors: number[][] = [];

  if (row > 0 && !visited[row - 1][col])
    unvisitedNeighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col])
    unvisitedNeighbors.push([row + 1, col]);
  if (col > 0 && !visited[row][col - 1])
    unvisitedNeighbors.push([row, col - 1]);
  if (col < matrix[row].length - 1 && !visited[row][col + 1])
    unvisitedNeighbors.push([row, col + 1]);

  return unvisitedNeighbors;
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
