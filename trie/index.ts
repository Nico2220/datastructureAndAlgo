class TrieNode {
  children: { [key: string]: TrieNode };
  endOfWord: boolean;
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word: string) {
    let node: TrieNode = this.root;
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode() as TrieNode;
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(word: string) {
    let node = this.root;
    for (const char of word) {
      if (char in node.children) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }

  startWith(string: string) {
    let node = this.root;
    for (const char of string) {
      if (!(char in node.children)) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// const r = new Trie();
// obj.insertWord("abcd");

// console.log(obj.search("abcd"));
