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
  let stack: BST[] = [];
  let node = tree;
  while (true) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length === 0) {
        break;
      }
      node = stack.pop()!;
      array.push(node.value);
      node = node.right;
    }
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  let stack = [tree];
  while (stack.length > 0) {
    const current = stack.pop()!;
    array.push(current.value);
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  let stack1 = [tree];
  let stack2 = [];
  while (stack1.length > 0) {
    let currentNode = stack1.pop()!;
    stack2.push(currentNode);

    if (currentNode.left) stack1.push(currentNode.left);
    if (currentNode.right) stack1.push(currentNode.right);
  }

  while (stack2.length > 0) {
    const currentNode = stack2.pop()!;
    array.push(currentNode.value);
  }

  return array;
}
