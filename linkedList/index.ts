class LinkedListNode {
  value: number;
  prev: LinkedListNode | null;
  next: LinkedListNode | null;
  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  search(value: number) {
    let node = this.head;
    while (node != null && node.value !== value) {
      node = node.next;
    }
    return node?.value;
  }

  prepend(value: number) {
    let node = new LinkedListNode(value);
    let head = this.head;
    node.next = head;
    node.prev = null;

    if (head !== null) {
      head.prev = node;
    }

    this.head = node;
  }

  insert() {}

  delete(node: LinkedListNode) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
  }
}

const d = new DoublyLinkedList();
console.log(d.head);
d.prepend(9);
d.prepend(16);
console.log(d.head);

console.log("r", d.search(10));
