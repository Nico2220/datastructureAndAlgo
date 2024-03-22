export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

function heightBalance(tree: BinaryTree) {
  return heightBalanceHelper(tree) !== -1;
}

export function heightBalanceHelper(tree: BinaryTree | null) {
  if (tree === null) return 0;

  let leftHeight = heightBalanceHelper(tree.left) as number;
  if (leftHeight === -1) return -1;
  let rightHeight = heightBalanceHelper(tree.left) as number;
  if (leftHeight < 0) return -1;

  if (rightHeight - rightHeight > 0) {
    return -1;
  }

  return 1 + Math.max(leftHeight, rightHeight);
}
