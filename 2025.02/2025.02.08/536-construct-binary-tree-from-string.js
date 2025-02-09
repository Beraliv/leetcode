const isDigit = (ch) => /\d/.test(ch);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  if (s === "") {
    return null;
  }

  const findNodeValEndIndex = (index) => {
    let end = index;
    if (end < s.length && s[end] === "-") {
      end++;
    }
    while (end < s.length && isDigit(s[end])) {
      end++;
    }
    return end;
  };

  const dfs = (index) => {
    let start = index,
      end = findNodeValEndIndex(index);
    const node = new TreeNode(Number(s.substring(start, end)));

    let left, right;

    if (end < s.length && s[end] === "(") {
      [end, left] = dfs(end + 1);
      node.left = left;
    }
    if (end < s.length && node.left !== null && s[end] === ")") {
      end++;
    }
    if (end < s.length && node.left !== null && s[end] === "(") {
      [end, right] = dfs(end + 1);
      node.right = right;
    }
    if (end < s.length && node.right !== null && s[end] === ")") {
      end++;
    }

    return [end, node];
  };

  const [end, root] = dfs(0);

  return root;
};

console.log(`>>> 2:`, str2tree("2"));
console.log(`>>> 2(3)(1):`, str2tree("2(3)(1)"));
