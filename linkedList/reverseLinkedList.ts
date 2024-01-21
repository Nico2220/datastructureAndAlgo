// O(n) time | O(1) space - n is the number of node in the linkedList

class LinkedList {
  value: number;
  next: LinkedList | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head: LinkedList) {
  let curr: LinkedList | null = head;
  let prev: LinkedList | null = null;

  while (curr !== null) {
    let nxt = curr.next as LinkedList;
    curr.next = prev;

    prev = curr;
    curr = nxt;
  }
}
