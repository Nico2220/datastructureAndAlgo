export function cycleInGraph(edges: number[][]) {
  const visited = edges.map((v) => false);
  const currentlyInStack = edges.map((v) => false);

  for (let node = 0; node < edges.length; node++) {
    if (visited[node]) continue;

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
    } else if (currentlyInStack[node]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
}

cycleInGraph([[1, 3], [2, 3, 4], [0], [], [2, 5], []]);
