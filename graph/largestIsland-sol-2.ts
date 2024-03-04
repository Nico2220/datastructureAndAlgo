export function largestIsland(matrix: number[][]) {
  const isLandSizes: number[] = [];
  let isLandNumber = 2;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        isLandSizes.push(getSizeFromIsland(row, col, matrix, isLandNumber));
        isLandNumber++;
      }
    }
  }

  let maxSize = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 1) continue;

      const landNeighbors = getLandNeighbors(row, col, matrix);
      const islands = new Set<number>();
      for (const neighbor of landNeighbors) {
        islands.add(matrix[neighbor[0]][neighbor[1]]);
      }

      let size = 1;
      for (const island of islands) {
        size += isLandSizes[island - 2];
      }
      maxSize = Math.max(maxSize, size);
    }
  }
  return maxSize;
}

function getSizeFromIsland(
  row: number,
  col: number,
  matrix: number[][],
  islandNumber: number
) {
  let size = 0;
  const nodesToExplore = [[row, col]];
  while (nodesToExplore.length > 0) {
    const currentNode = nodesToExplore.pop()!;
    const [currentRow, currentCol] = currentNode;

    if (matrix[currentRow][currentCol] !== 0) continue;

    matrix[currentRow][currentCol] = islandNumber;
    size++;
    nodesToExplore.push(...getLandNeighbors(currentRow, currentCol, matrix));
  }
  return size;
}

function getLandNeighbors(row: number, col: number, matrix: number[][]) {
  let neighbors: [number, number][] = [];

  if (row > 0 && matrix[row - 1][col] !== 1) neighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && matrix[row + 1][col] !== 1)
    neighbors.push([row + 1, col]);
  if (col > 0 && matrix[row][col - 1] !== 1) neighbors.push([row, col - 1]);
  if (col < matrix[row].length - 1 && matrix[row][col + 1] !== 1)
    neighbors.push([row, col + 1]);

  return neighbors;
}
