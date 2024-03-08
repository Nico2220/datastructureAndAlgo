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

export function branchSum(root: BinaryTree) {
  let sum = 0;
  let array: number[] = [];

  return branchSumHelper(root, sum, array);
}

function branchSumHelper(root: BinaryTree, sum: number, array: number[]) {
  sum += root.value;
  if (root.left === null && root.right === null) {
    array.push(sum);
    return;
  }

  if (root.left) branchSumHelper(root.left, sum, array);
  if (root.right) branchSumHelper(root.right, sum, array);

  return array;
}
