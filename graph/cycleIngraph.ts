export function cycleInGraph(edges: number[][]) {
  const visited = new Array(edges.length).fill(false);
  const currentlyInStack = new Array(edges.length).fill(false);

  for (let node = 0; node < edges.length; node++) {
    if (visited[0]) continue;

    const isCycle = checkForCycle(node, edges, currentlyInStack, visited);
    if (isCycle) {
      return true;
    }
  }

  return false;
}

function checkForCycle(
  node: number,
  edges: number[][],
  currentlyInStack: boolean[],
  visited: boolean[]
) {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];
  for (let neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containCycle = checkForCycle(
        neighbor,
        edges,
        currentlyInStack,
        visited
      );
      if (containCycle) {
        return true;
      }
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  currentlyInStack[node] = false;

  return false;
}

console.log(cycleInGraph([[1, 3], [2, 3, 4], [0], [], [2, 5], []]));
