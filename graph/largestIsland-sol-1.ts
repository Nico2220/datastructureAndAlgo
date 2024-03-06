export function largestIsland(matrix: number[][]) {
  const visited: boolean[][] = matrix.map((row) => row.map((col) => false));
  let largest = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (visited[row][col]) continue;

      let currentLargest = findLargestIsland(row, col, matrix, visited);

      largest = Math.max(currentLargest, largest);
      matrix[row][col] = 1;
    }
  }
  return largest;
}

function findLargestIsland(
  row: number,
  col: number,
  matrix: number[][],
  visited: boolean[][]
) {
  let queue = [[row, col]];
  visited[row][col] = true;
  let size = 1;
  while (queue.length > 0) {
    const current = queue.shift() as [number, number];
    const [currentRow, currentCol] = current;

    const neighbors = getNeighbors(currentRow, currentCol, matrix);
    for (let position of neighbors) {
      const [row, col] = position;
      if (visited[row][col]) continue;

      if (matrix[row][col] === 1) continue;

      queue.push([row, col]);
      visited[row][col] = true;
      size++;
    }
  }

  return size;
}

function getNeighbors(row: number, col: number, matrix: number[][]) {
  let neighbors: [number, number][] = [];

  if (row > 0 && matrix[row - 1][col] === 0) neighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && matrix[row + 1][col] === 0)
    neighbors.push([row + 1, col]);
  if (col > 0 && matrix[row][col - 1] === 0) neighbors.push([row, col - 1]);
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 0)
    neighbors.push([row, col + 1]);

  return neighbors;
}
