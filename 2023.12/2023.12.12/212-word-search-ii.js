function TrieNode() {
  this.children = new Map();
  this.word = null;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (board.length === 0) {
    return [];
  }

  const n = board.length;
  const m = board[0].length;

  const answers = [];

  const trie = new TrieNode();
  for (const word of words) {
    let node = trie;
    for (const ch of word) {
      if (node.children.has(ch)) {
        node = node.children.get(ch);
      } else {
        const newNode = new TrieNode();
        node.children.set(ch, newNode);
        node = newNode;
      }
    }
    node.word = word;
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x0, y0, node) => {
    if (node.word !== null) {
      answers.push(node.word);
      node.word = null;
    }

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= n) {
        continue;
      }
      if (y < 0 || y >= m) {
        continue;
      }

      const ch = board[x][y];

      if (ch === "#") {
        continue;
      }

      if (node.children.has(ch)) {
        board[x][y] = "#";
        dfs(x, y, node.children.get(ch));
        board[x][y] = ch;
      }
    }
  };

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      const ch = board[x][y];
      if (trie.children.has(ch)) {
        board[x][y] = "#";
        dfs(x, y, trie.children.get(ch));
        board[x][y] = ch;
      }
    }
  }

  return answers;
};
