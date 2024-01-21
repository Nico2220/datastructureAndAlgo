// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let first: LinkedList = head;
  let second: LinkedList | null = head;
  let counter = 1;

  while (counter <= k) {
    second = second?.next as LinkedList;
  }

  if (second == null && head !== null) {
    head.value = head.next?.value as number;
    head.next = head.next?.next as LinkedList;
  }

  while (second.next !== null) {
    first = first.next as LinkedList;
    second = second?.next as LinkedList;
  }

  first.next = first.next?.next as LinkedList;
}
