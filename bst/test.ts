class BT {
  value: number;
  left: BT | null;
  right: BT | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BT(2);
tree.left = new BT(3);
tree.right = new BT(5);

console.log(tree);
