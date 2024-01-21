export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function findLoop(head: LinkedList) {
  let first: LinkedList = head;
  let second: LinkedList | null = head.next && head.next.next;

  while (second !== first) {
    first = first.next as LinkedList;
    second = second && (second.next?.next as LinkedList);
  }

  first = head;
  while (first !== second) {
    first = first.next as LinkedList;
    second = second && second.next;
  }

  return first;
}
