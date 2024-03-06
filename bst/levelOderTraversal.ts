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

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);

function levelOrderTraverse(root: BST | null) {
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let level = [];
    for (let i = 0; i < queue.length; i++) {
      const current = queue.shift()!;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      level.push(current.value);
    }
    result.push(level);
  }
  return result;
}

console.log(levelOrderTraverse(root));
