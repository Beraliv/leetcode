function TrieNode() {
  this.children = new Map();
  this.word = false;
}

class WordDictionary {
  constructor() {
    this.head = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.head;

    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }

      node = node.children.get(ch);
    }

    node.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (node, index) => {
      for (let i = index; i < word.length; i++) {
        const ch = word[i];

        if (!node.children.has(ch)) {
          if (ch === ".") {
            for (const key of node.children.keys()) {
              if (dfs(node.children.get(key), i + 1)) {
                return true;
              }
            }
          }

          return false;
        } else {
          if (!node.children.has(ch)) {
            return false;
          }

          node = node.children.get(ch);
        }
      }

      return node.word;
    };

    return dfs(this.head, 0);
  }
}

// bad

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
