export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.right.right.left = new BinaryTree(7);
root.right.right.right = new BinaryTree(8);

export function findNodesDistanceK(
  tree: BinaryTree,
  target: number,
  k: number
) {
  const parents: { [key: number]: BinaryTree } = {};
  let targetNode: BinaryTree = new BinaryTree(0);
  const queue = [tree];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current.left) {
      queue.push(current.left);
      parents[current.left.value] = current;
    }

    if (current.right) {
      queue.push(current.right);
      parents[current.right.value] = current;
    }

    if (target == current.value) {
      targetNode = current;
    }
  }

  const queue1 = [targetNode];
  const visited: { [key: string]: boolean } = { [target]: true };
  let distance = 0;
  while (queue1.length > 0) {
    if (distance++ === k) break;
    const size = queue1.length;

    for (let i = 0; i < size; i++) {
      const current = queue1.shift()!;

      if (current.left && !visited[current.left.value]) {
        queue1.push(current.left);
        visited[current.left.value] = true;
      }

      if (current.right && !visited[current.right.value]) {
        queue1.push(current.right);
        visited[current.right.value] === true;
      }

      if (parents[current.value] && !visited[parents[current.value].value]) {
        queue1.push(parents[current.value]);
        visited[parents[current.value].value] = true;
      }
      console.log(current, queue1, visited);
    }
  }

  const result = queue1.map((v) => v.value);
  return result;
}

function setParent(tree: BinaryTree, parents: {}) {}

console.log(findNodesDistanceK(root, 3, 2));
