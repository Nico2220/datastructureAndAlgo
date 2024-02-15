export function riverSizes(matrix: number[][]) {
  const result: number[] = [];
  const visited: boolean[][] = matrix.map((line) => line.map((col) => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 || visited[i][j] === true) continue;
      bfs(i, j, matrix, visited, result);
    }
  }
  return result;
}

function bfs(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  result: number[]
) {
  let size = 0;
  const queue: number[][] = [[i, j]];
  visited[i][j] = true;
  while (queue.length > 0) {
    const current = queue.shift()!;

    size++;
    const neighbors = getNeighbors(current, matrix, visited);
    for (const neighbor of neighbors) {
      if (matrix[neighbor[0]][neighbor[1]] === 1) {
        queue.push(neighbor);
        visited[neighbor[0]][neighbor[1]] = true;
      }
    }
  }
  if (size > 0) result.push(size);
}

function getNeighbors(
  current: number[],
  matrix: number[][],
  visited: boolean[][]
) {
  const neighbors: number[][] = [];
  const [i, j] = current;

  if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]);
  if (j < matrix[i].length - 1 && !visited[i][j + 1])
    neighbors.push([i, j + 1]);

  return neighbors;
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
