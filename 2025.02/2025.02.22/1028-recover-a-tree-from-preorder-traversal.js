const isDigit = (ch) => /\d/.test(ch);

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  // Solution: 1 Iteration + Stack (building a tree)
  // Time: O(N)
  // Space: O(N) in the worst scenario, O(logN) for BST

  if (traversal.length === 0) {
    return null;
  }

  let dummy = new TreeNode();

  const stack = [dummy];

  let index = 0;
  while (index < traversal.length) {
    let start = index,
      end = index;
    while (end < traversal.length && traversal[end] === "-") {
      end++;
    }

    const depth = end - start;
    while (stack.length > depth + 1) {
      stack.pop();
    }

    let val = 0;
    while (end < traversal.length && isDigit(traversal[end])) {
      val = val * 10 + Number(traversal[end]);
      end++;
    }

    const next = new TreeNode(val);
    const parent = stack[stack.length - 1];
    if (parent.left === null) {
      parent.left = next;
    } else {
      parent.right = next;
    }
    stack.push(next);

    index = end;
  }

  return dummy.left;
};

// console.log(recoverFromPreorder("1-2-3"));
console.log(recoverFromPreorder("1-2--3--4-5--6--7"));
