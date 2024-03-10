// This is an input class. Do not edit.
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

// //O(n) time | O(n) space
// export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
//   const array = inOrderTraversal(tree, []) as BinaryTree[];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === node) {
//       return array[i + 1];
//     }
//   }

//   return null;
// }

// function inOrderTraversal(tree: BinaryTree | null, array: BinaryTree[]) {
//   if (tree === null) {
//     return;
//   }
//   inOrderTraversal(tree.left, array);
//   array.push(tree);
//   inOrderTraversal(tree.right, array);
//   return array;
// }

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if (node.right !== null) return getLeftMostChild(node.right);
  return getRightmostParent(node);
}

function getLeftMostChild(node: BinaryTree) {
  let currentNode: BinaryTree = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightmostParent(node: BinaryTree) {
  let currentNode = node;
  while (
    currentNode.parent !== null &&
    currentNode.parent.right === currentNode
  ) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}
