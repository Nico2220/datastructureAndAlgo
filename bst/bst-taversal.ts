export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n)- time | O(n) space
export function inOrderTraverse(tree: BST | null, array: number[]) {
  let currentNode = tree;
  if (currentNode == null) {
    return;
  }
  inOrderTraverse(currentNode.left, array);
  array.push(currentNode.value);
  inOrderTraverse(currentNode.right, array);
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  let currentNode = tree;
  if (currentNode == null) {
    return;
  }

  array.push(currentNode.value);
  preOrderTraverse(currentNode.left, array);
  preOrderTraverse(currentNode.right, array);
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  let currentNode = tree;
  if (currentNode == null) {
    return;
  }
  postOrderTraverse(currentNode.left, array);
  postOrderTraverse(currentNode.right, array);
  array.push(currentNode.value);
  return array;
}
