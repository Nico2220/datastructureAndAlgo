export function boggleBoard(board: string[][], words: string[]): string[] {
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }

  const finalWords = {};
  const visited = board.map((row) => row.map((col) => false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; i < board[i].length; i++) {
      explore(i, j, board, trie.root, visited, finalWord);
    }
  }

  return [];
}

function explore(
  i: number,
  j: number,
  board: string[][],
  visited: boolean[][],
  finalWords: FinalWords
);

interface FinalWords {
  [key: string]: boolean;
}

interface TrieNode {
  [key: string]: string | TrieNode;
}
class Trie {
  root: TrieNode = {};
  endSymbol: string = "*";

  contructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  add(word: string) {
    let current = this.root;
    for (const letter of word) {
      if (!(letter in current)) {
        current[letter] = {};
      }
      current = current[letter] as TrieNode;
    }
    current[this.endSymbol] = word;
  }
}

boggleBoard(
  [
    ["t", "h", "i", "s", "i", "s", "a"],
    ["s", "i", "m", "p", "l", "e", "x"],
    ["b", "x", "x", "x", "x", "e", "b"],
    ["x", "o", "g", "g", "l", "x", "o"],
    ["x", "x", "x", "D", "T", "r", "a"],
    ["R", "E", "P", "E", "A", "d", "x"],
    ["x", "x", "x", "x", "x", "x", "x"],
    ["N", "O", "T", "R", "E", "-", "P"],
    ["x", "x", "D", "E", "T", "A", "E"],
  ],
  [
    "this",
    "is",
    "not",
    "a",
    "simple",
    "boggle",
    "board",
    "test",
    "REPEATED",
    "NOTRE-PEATED",
  ]
);
