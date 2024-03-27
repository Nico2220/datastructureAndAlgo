// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
//   let p1: LinkedList | null = headOne;
//   let p2: LinkedList | null = headTwo;
//   let p1Prev: LinkedList | null = null;

//   while (p1 !== null && p2 !== null) {
//     if (p1.value < p2.value) {
//       p1Prev = p1;
//       p1 = p1.next;
//     } else {
//       if (p1Prev !== null) p1Prev.next = p2;
//       p1Prev = p2;
//       p2 = p2.next;
//       p1Prev.next = p1;
//     }
//   }

//   if (p1 === null) p1Prev!.next = p2;
//   return headOne.value < headTwo.value ? headOne : headTwo;
// }

export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
  let curr1: LinkedList | null = headOne;
  let curr2: LinkedList | null = headTwo;
  let dommyNode = new LinkedList(-Infinity);
  let temp = dommyNode;

  while (curr1 != null && curr2 != null) {
    if (curr1.value < curr2.value) {
      temp.next = curr1;
      temp = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      temp = curr2;
      curr2 = curr2.next;
    }
  }

  if (curr1 == null) {
    temp.next = curr2;
  } else {
    temp.next = curr1;
  }

  return dommyNode.next;
}
