// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  let currentNodeOne: AncestralTree = descendantOne;
  let countLevelOne = 0;
  while (currentNodeOne != topAncestor) {
    currentNodeOne = topAncestor.ancestor as AncestralTree;
    countLevelOne++;
  }

  let currentNodeTwo: AncestralTree = descendantTwo;
  let countLevelTwo = 0;
  while (currentNodeTwo != topAncestor) {
    currentNodeTwo = currentNodeTwo.ancestor as AncestralTree;
    countLevelTwo++;
  }

  if (countLevelOne > countLevelTwo) {
    let diff = countLevelOne - countLevelTwo;
    while (diff > 0) {
      currentNodeOne = currentNodeOne.ancestor as AncestralTree;
      diff--;
    }
  } else if (countLevelTwo > countLevelOne) {
    let diff = countLevelTwo - countLevelOne;
    while (diff > 0) {
      currentNodeTwo = currentNodeTwo.ancestor as AncestralTree;
      diff--;
    }
  }

  return currentNodeOne === currentNodeTwo
    ? currentNodeOne
    : currentNodeOne.ancestor;
}
