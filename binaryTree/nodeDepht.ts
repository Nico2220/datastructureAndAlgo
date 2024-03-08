// This is the class of the input binary tree.
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
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

export function nodeDepths(root: BinaryTree) {
  let depht = 1;
  let sum = 0;
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const current = queue.shift()!;
      if (current.left) {
        queue.push(current.left);
        sum += depht;
      }

      if (current.right) {
        queue.push(current.right);
        sum += depht;
      }
    }
    depht++;
  }
  return sum;
}

console.log(nodeDepths(root));
