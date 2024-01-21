export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currentNode: null | LinkedList = linkedList;

  while (currentNode !== null) {
    let nextNode: LinkedList | null = currentNode.next;

    while (nextNode !== null && currentNode.value === nextNode.value) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }

  return linkedList;
}
