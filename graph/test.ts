class Matrix {
  matrix: number[][] = [];
  constructor(n: number, m: number) {
    this.matrix = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  }

  addEdges(nodeOne: number, nodeTwo: number) {
    this.matrix[nodeOne][nodeTwo] = 1;
    this.matrix[nodeTwo][nodeOne] = 1;
    return this;
  }
}

const myMatrix = new Matrix(5, 5);
myMatrix
  .addEdges(1, 2)
  .addEdges(1, 3)
  .addEdges(2, 4)
  .addEdges(3, 4)
  .addEdges(3, 5);

class Graph {
  adjList: { [key: string]: number[] };
  constructor() {
    this.adjList = {};
  }

  addEdges(nodeOne: number, nodeTwo: number) {
    if (!this.adjList[nodeOne]) this.adjList[nodeOne] = [];
    if (!this.adjList[nodeTwo]) this.adjList[nodeTwo] = [];
    this.adjList[nodeOne].push(nodeTwo);
    this.adjList[nodeTwo].push(nodeOne);
    return this;
  }
}

const graph = new Graph();
graph.addEdges(1, 2).addEdges(2, 4).addEdges(3, 4);

function dfs(adjList: { [key: string]: number[] }, startNode: number) {
  let visited = new Array(10).fill(0);
  let queue = [startNode];
  visited[startNode] = 1;
  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = adjList[current];
    for (const el of neighbors) {
      if (visited[el]) continue;
      visited[el] = 1;
      queue.push(el);
    }
  }
}
