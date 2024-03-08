class BS {
  value: number;
  left: BS | null;
  right: BS | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BS(10);
root.left = new BS(5);
root.left.left = new BS(2);
root.left.left.left = new BS(1);
root.left.right = new BS(5);
root.right = new BS(15);
root.right.right = new BS(22);

export function inOrderTraverse(tree: BS | null, array: number[]) {
  //left root right
  if (tree === null) return;
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}

export function inOrderTraverseIterative(tree: BS | null, array: number[]) {
  let stack = [];
  while (true) {
    if (tree !== null) {
      stack.push(tree);
      tree = tree.left;
    } else {
      if (stack.length === 0) break;
      tree = stack.pop()!;
      array.push(tree.value);
      tree = tree.right;
    }
  }
  return array;
}

export function preOrderTraverse(tree: BS | null, array: number[]) {
  if (tree === null) {
    return;
  }

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

export function preOrderTraverseIterative(tree: BS | null, array: number[]) {
  const stack = [tree];
  while (stack.length > 0) {
    const current = stack.pop()!;
    array.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return array;
}

export function postOrderTraverse(tree: BS | null, array: number[]) {
  if (tree === null) {
    return;
  }

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}

export function postOrderTraverseIterative(tree: BS | null, array: number[]) {
  let stack1 = [tree];
  let stack2 = [];
  while (stack1.length > 0) {
    const current = stack1.pop()!;
    stack2.push(current.value);
    if (current.left) stack1.push(current.left);
    if (current.right) stack1.push(current.right);
  }

  while (stack2.length > 0) {
    const current = stack2.pop()!;
    array.push(current);
  }

  return array;
}

console.log(postOrderTraverseIterative(root, []));
