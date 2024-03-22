// This is the class of the input root. Do not edit it.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function rightSiblingTree(root: BinaryTree) {
  const queue: Array<BinaryTree | null> = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const left = queue[i];
      const right = queue[i + 1];
      if (left === null) continue;
      left.right = right;
      const curr = queue.shift()!;

      if (curr !== null) {
        queue.push(curr.left);
        queue.push(curr.right);
      }
    }
  }
  return root;
}
