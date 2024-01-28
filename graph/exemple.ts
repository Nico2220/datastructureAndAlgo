// class Graph {
//   adjacencyList: { [key: string]: Set<string> };
//   constructor() {
//     this.adjacencyList = {};
//   }

//   addVertex(vertex: string) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = new Set();
//     }
//   }

//   addEdge(vertex1: string, vertex2: string) {
//     if (!this.adjacencyList[vertex1]) {
//       this.addVertex(vertex1);
//     }

//     if (!this.adjacencyList[vertex2]) {
//       this.addVertex(vertex2);
//     }

//     this.adjacencyList[vertex1].add(vertex2);
//     this.adjacencyList[vertex2].add(vertex1);
//   }

//   hasEdge(vertex1: string, vertex2: string) {
//     return (
//       this.adjacencyList[vertex1] != null &&
//       this.adjacencyList[vertex1].has(vertex2)
//     );
//   }

//   removeEdge(vertex1: string, vertex2: string) {
//     this.adjacencyList[vertex1].delete(vertex2);
//     this.adjacencyList[vertex2].delete(vertex1);
//   }

//   removeVertex(vertex: string) {
//     for (let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(adjacentVertex, vertex);
//     }

//     delete this.adjacencyList[vertex];
//   }

//   bfs() {
//     const queue = this.adjacencyList[0];
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex("A");
// myGraph.addVertex("B");
// myGraph.addVertex("C");

// myGraph.addEdge("B", "A");
// myGraph.addEdge("B", "C");

// console.log(myGraph.adjacencyList);

// myGraph.removeVertex("B");
// console.log(myGraph.adjacencyList);

const obj: { [key: string]: number } = { a: 1, b: 2 };
console.log(obj["a"]);
