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

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);

// export function flattenBinaryTree(root: BinaryTree) {
//   const inOrderTraverseArray = inOrderTraverse(root, []) as BinaryTree[];
//   for (let i = 0; i < inOrderTraverseArray.length - 1; i++) {
//     const left = inOrderTraverseArray[i];
//     const right = inOrderTraverseArray[i + 1];
//     left.right = right;
//     right.left = left;
//   }
//   return inOrderTraverseArray[0];
// }

// function inOrderTraverse(tree: BinaryTree | null, array: BinaryTree[]) {
//   if (tree === null) return;

//   inOrderTraverse(tree.left, array);
//   array.push(tree);
//   inOrderTraverse(tree.right, array);
//   return array;
// }

// export function flattenBinaryTree(root: BinaryTree) {
//   const [leftMost, _] = flattenTree(root);
//   return leftMost;
// }

// function flattenTree(node: BinaryTree): [BinaryTree, BinaryTree] {
//   let leftMost, rightMost;

//   if (node.left === null) {
//     leftMost = node;
//   } else {
//     const [leftSubTreeLeftMost, leftSubTreeRighMost] = flattenTree(node.left);
//     connectNodes(leftSubTreeRighMost, node);
//     leftMost = leftSubTreeLeftMost;
//   }

//   if (node.right === null) {
//     rightMost = node;
//   } else {
//     const [rightSubTreeLeftMost, rightSubTreeRightMost] = flattenTree(
//       node.right
//     );
//     connectNodes(node, rightSubTreeLeftMost);
//     rightMost = rightSubTreeRightMost;
//   }

//   return [leftMost, rightMost];
// }

// function connectNodes(left: BinaryTree, right: BinaryTree) {
//   left.right = right;
//   right.left = left;
// }

export function flattenTree(root: BinaryTree) {
  let flatTree: any = null;
  function helper(node: BinaryTree | null) {
    if (node === null) return;
    helper(node.right);

    if (flatTree == null) {
      flatTree = node;
    } else if (node) {
      flatTree.left = node;
      node.right = flatTree;
      flatTree = node;
    }
    helper(node.left);
  }
  helper(root);
  return flatTree;
}

console.log(flattenTree(root));
