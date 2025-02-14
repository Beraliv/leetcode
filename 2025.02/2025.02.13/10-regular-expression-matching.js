/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // Solution: Top-down DFS + Memo
  // Time: ???
  // Space: O(P * S)

  let cache = Array(s.length + 1)
    .fill(0)
    .map(() => Array(p.length + 1).fill(undefined));

  let dfs = (i, j) => {
    if (typeof cache[i][j] === "boolean") {
      return cache[i][j];
    }

    if (i >= s.length && j >= p.length) {
      return true;
    }
    if (j >= p.length) {
      return false;
    }

    const match = i < s.length && (s[i] === p[j] || p[j] === ".");

    if (j + 1 < p.length && p[j + 1] === "*") {
      return (cache[i][j] =
        // Don't use * symbol
        dfs(i, j + 2) ||
        // Use * symbol
        (match && dfs(i + 1, j)));
    }

    if (match) {
      return (cache[i][j] = dfs(i + 1, j + 1));
    }

    return (cache[i][j] = false);
  };

  return dfs(0, 0);
};
