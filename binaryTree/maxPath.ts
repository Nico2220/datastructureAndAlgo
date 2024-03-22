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

// export function maxPathSum(tree: BinaryTree) {
//   let maxValue: number[] = [];
//   maxValue[0] = -Infinity;
//   maxPathSumHelper(tree, maxValue);
//   return maxValue[0];
// }

// function maxPathSumHelper(tree: BinaryTree | null, maxValue: number[]) {
//   if (tree === null) return 0;

//   const left = Math.max(0, maxPathSumHelper(tree.left, maxValue));
//   const right = Math.max(0, maxPathSumHelper(tree.right, maxValue));

//   maxValue[0] = Math.max(maxValue[0], left + right + tree.value);

//   return tree.value + Math.max(left + right)
// }

export function maxPathSum(tree: BinaryTree) {
  const [_, maxSum] = findMax(tree);
  return maxSum;
}

function findMax(tree: BinaryTree | null) {
  if (tree === null) return [0, 0];

  const [leftMaxSumAsBranch, lefPathtMaxSum] = findMax(tree.left);
  const [rightMaxSumAsBranch, rightPathMaxSum] = findMax(tree.right);

  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + tree.value, tree.value);
  const maxSumAsRootNode = Math.max(
    maxSumAsBranch,
    leftMaxSumAsBranch + tree.value + rightMaxSumAsBranch
  );

  const maxPath = Math.max(lefPathtMaxSum, rightPathMaxSum, maxSumAsRootNode);

  return [maxSumAsBranch, maxPath];
}
