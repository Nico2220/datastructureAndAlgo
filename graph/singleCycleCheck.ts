export function hasSingleCycle(array: number[]) {
  let numElementVisited = 0;
  let currentIdx = 0;
  while (numElementVisited < array.length) {
    if (numElementVisited > 0 && currentIdx === 0) {
      return false;
    }
    numElementVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx: number, array: number[]) {
  let jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
