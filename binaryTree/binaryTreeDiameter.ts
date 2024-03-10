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

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

export function binaryTreeDiameter(tree: BinaryTree) {
  let diameter: number = 0;
  binaryTreeDiameterHelper(tree, diameter);
  console.log("diameter", diameter);
}

function binaryTreeDiameterHelper(tree: BinaryTree | null, diameter: number) {
  if (tree === null) {
    return 0;
  }

  const leftHeight: number = binaryTreeDiameterHelper(tree.left, diameter);
  const rightHeight: number = binaryTreeDiameterHelper(tree.right, diameter);
  diameter = Math.max(diameter, leftHeight + rightHeight);
  return 1 + Math.max(leftHeight, rightHeight);
}

console.log(binaryTreeDiameter(root));
