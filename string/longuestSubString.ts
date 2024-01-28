function longestSubStringWithoutDuplicate(string: string) {
  const seen: { [key: string]: number } = {};
  let startIndex: number = 0;
  let longest: number[] = [0, 0];

  for (let i = 0; i < string.length; i++) {
    const letter: string = string[i];
    if (letter in seen) {
      startIndex = Math.max(startIndex, seen[letter] + 1);
    }

    if (i - startIndex > longest[1] - longest[0]) {
      longest = [startIndex, i];
    }

    seen[letter] = i;
  }

  return string.slice(longest[0], longest[1] + 1);
}

const r = longestSubStringWithoutDuplicate("clementisacap");

console.log(r);
