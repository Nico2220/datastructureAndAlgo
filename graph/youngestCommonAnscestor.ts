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
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backTrackDescendant(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backTrackDescendant(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(
  descendant: AncestralTree,
  topAncestor: AncestralTree
) {
  let depht = 0;
  while (descendant !== topAncestor) {
    depht++;
    descendant = descendant.ancestor as AncestralTree;
  }
  return depht;
}

function backTrackDescendant(
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
  diff: number
) {
  while (diff > 0) {
    descendantOne = descendantOne.ancestor as AncestralTree;
    diff--;
  }

  while (descendantOne !== descendantTwo) {
    descendantOne = descendantOne.ancestor as AncestralTree;
    descendantTwo = descendantTwo.ancestor as AncestralTree;
  }

  return descendantOne;
}
