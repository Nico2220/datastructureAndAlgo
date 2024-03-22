class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number, parent: BinaryTree | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

export function iterativeInOrderTraversal(
  tree: BinaryTree,
  callback: (node: BinaryTree) => void
) {
  let stack: BinaryTree[] = [];
  let currentNode: BinaryTree | null = tree;
  while (true) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      if (stack.length <= 0) break;
      currentNode = stack.pop()!;
      callback(currentNode);
      currentNode = currentNode.right;
    }
  }
}
