class Trie_Node {
  children: { [key: string]: Trie_Node };
  endOfWord: boolean;
  countPrefix: number;
  constructor() {
    this.children = {};
    this.endOfWord = false;
    this.countPrefix = 0;
  }
}

class Trie_ {
  root: Trie_Node;
  constructor() {
    this.root = new Trie_Node();
  }

  insertWord(word: string) {
    let node: Trie_Node = this.root;
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new Trie_Node() as Trie_Node;
      }
      node = node.children[char];
      node.countPrefix++;
    }
    node.endOfWord = true;
    return node.countPrefix;
  }

  countWord(word: string) {
    let node: Trie_Node = this.root;
    for (const char of word) {
      if (char in node.children) {
        node = node.children[char];
      }
    }
    if (node.endOfWord) {
      return node.countPrefix;
    }
    return 0;
  }

  count(word: string) {
    let node: Trie_Node = this.root;
    for (const char of word) {
      if (char in node.children) {
        node = node.children[char];
      }
    }

    return node.countPrefix;
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

  countWordEqualTo(word: string) {}

  // delete() {}
}

const test = new Trie_();
test.insertWord("apple");
test.insertWord("apple");
test.insertWord("apps");
test.insertWord("apps");

console.log(test.countWord("appple"));
