// This is an input class. Do not edit.
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

export function heightBalancedBinaryTree(tree: BinaryTree) {
  return getHeight(tree) !== -1;
}

function getHeight(tree: BinaryTree | null) {
  if (tree === null) return 0;

  const leftHeight = getHeight(tree.left) as number;
  if (leftHeight === -1) return -1;

  const rightHeight = getHeight(tree.right) as number;
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return 1 + Math.max(leftHeight, rightHeight);
}
