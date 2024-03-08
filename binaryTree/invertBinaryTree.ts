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

export function invertBinaryTree(tree: BinaryTree | null) {
  let queue = [tree];
  while (queue.length > 0) {
    const current = queue.shift()!;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    const temp = current.left;
    current.left = current.right;
    current.right = temp;
  }
  return tree;
}
