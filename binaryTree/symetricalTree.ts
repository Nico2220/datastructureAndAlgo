// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function symmetricalTree(tree: BinaryTree) {
  const stack1: Array<BinaryTree | null> = [tree.left];
  const stack2: Array<BinaryTree | null> = [tree.right];
  while (stack1.length > 0) {
    const left = stack1.pop()!;
    const right = stack2.pop()!;

    if (left === null && right === null) continue;

    if (left === null || right == null || left.value !== right.value) {
      return false;
    }

    stack1.push(left.left);
    stack1.push(left.right);

    stack2.push(right.right);
    stack2.push(right.left);
  }

  return true;
}
