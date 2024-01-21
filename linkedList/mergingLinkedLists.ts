export class LinkedList {
  value: number;
  next: LinkedList | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

//O(n + m) time | O(n) - space
// export function mergingLinkedLists(
//   linkedListOne: LinkedList,
//   linkedListTwo: LinkedList
// ) {
//   const seen = new Set();

//   let nodeOne: LinkedList | null = linkedListOne;
//   while (nodeOne !== null) {
//     seen.add(nodeOne.value);
//     nodeOne = nodeOne.next;
//   }

//   let nodeTwo: LinkedList | null = linkedListTwo;
//   while (nodeTwo !== null) {
//     if (seen.has(nodeTwo.value)) {
//       return nodeTwo;
//     }
//     nodeTwo = nodeTwo.next;
//   }

//   return null;
// }

//O(n+m) time | O(1) space
// export function mergingLinkedLists(
//   linkedListOne: LinkedList,
//   linkedListTwo: LinkedList
// ) {
//   let currentNodeOne: LinkedList | null = linkedListOne;
//   let countOne = 0;
//   while (currentNodeOne !== null) {
//     countOne++;
//     currentNodeOne = currentNodeOne.next;
//   }

//   let currentNodeTwo: LinkedList | null = linkedListTwo;
//   let countTwo = 0;
//   while (currentNodeTwo !== null) {
//     countTwo++;
//     currentNodeTwo = currentNodeTwo.next;
//   }

//   const difference = Math.abs(countOne - countTwo);
//   let biggerCurrentNode: LinkedList | null =
//     countOne > countTwo ? linkedListOne : linkedListTwo;
//   let smallerCurrentNode: LinkedList | null =
//     countOne > countTwo ? linkedListTwo : linkedListOne;

//   for (let i = 0; i < difference; i++) {
//     biggerCurrentNode = biggerCurrentNode.next as LinkedList;
//   }

//   while (biggerCurrentNode !== smallerCurrentNode) {
//     biggerCurrentNode = biggerCurrentNode.next as LinkedList;
//     smallerCurrentNode = smallerCurrentNode.next as LinkedList;
//   }
//   return biggerCurrentNode;
// }

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  let currentNodeOne: LinkedList | null = linkedListOne;
  let currentNodeTwo: LinkedList | null = linkedListTwo;

  while (currentNodeOne !== currentNodeTwo) {
    if (currentNodeOne === null) {
      currentNodeOne = currentNodeTwo;
    } else {
      currentNodeOne = currentNodeOne.next;
    }

    if (currentNodeTwo === null) {
      currentNodeTwo = linkedListOne;
    } else {
      currentNodeTwo = currentNodeTwo.next;
    }
  }

  return currentNodeOne;
}
