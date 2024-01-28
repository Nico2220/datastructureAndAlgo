export function riverSizes(matrix: number[][]) {
  const sizes: number[] = [];
  let visited: boolean[][] = matrix.map((row) => row.map((col) => false));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1 && !visited[row][col]) {
        traverseNode(row, col, matrix, visited, sizes);
      }
    }
  }
  return sizes;
}

function traverseNode(
  row: number,
  col: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) {
  const queue: number[][] = [[row, col]];
  let currentRiverSize = 0;

  while (queue.length > 0) {
    const currentNode = queue.pop()!;
    let currentRow = currentNode[0];
    let currentCol = currentNode[1];

    //make sure its not viseted and get neibors
    if (visited[currentRow][currentCol] === true) {
      continue;
    }
    visited[currentRow][currentCol] = true;

    if (matrix[currentRow][currentCol] === 0) {
      continue;
    }
    currentRiverSize++;

    const unvisitedNeighbors = getUnvisitedNeighbors(
      currentRow,
      currentCol,
      matrix,
      visited
    );
    for (let unvisitedNeighbor of unvisitedNeighbors) {
      queue.push(unvisitedNeighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(
  row: number,
  col: number,
  matrix: number[][],
  visited: boolean[][]
) {
  const unvisitedNeighbors: number[][] = [];
  if (row > 0 && !visited[row - 1][col])
    unvisitedNeighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col])
    unvisitedNeighbors.push([row + 1, col]);
  if (col < matrix[0].length - 1 && !visited[row][col + 1])
    unvisitedNeighbors.push([row, col + 1]);
  if (col > 0 && !visited[row][col - 1])
    unvisitedNeighbors.push([row, col - 1]);

  return unvisitedNeighbors;
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);
