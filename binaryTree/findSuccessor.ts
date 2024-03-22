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
