const CHAR_COUNT = 26;
const CHAR_START = "a".charCodeAt(0);

function Node(value) {
  this.value = value;
  this.children = Array(CHAR_COUNT + 1).fill(null);
}

const getIndex = (ch) => ch.charCodeAt(0) - CHAR_START;

var Trie = function () {
  this.dummyRoot = new Node(-1);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.dummyRoot;
  for (const ch of word) {
    const index = getIndex(ch);
    if (node.children[index] === null) {
      const newChild = new Node(ch);
      node.children[index] = newChild;
    }
    node = node.children[index];
  }
  node.children[CHAR_COUNT] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.dummyRoot;
  for (const ch of word) {
    const index = getIndex(ch);
    if (node.children[index] === null) {
      return false;
    }
    node = node.children[index];
  }
  return Boolean(node.children[CHAR_COUNT]);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.dummyRoot;
  for (const ch of prefix) {
    const index = getIndex(ch);
    if (node.children[index] === null) {
      return false;
    }
    node = node.children[index];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
