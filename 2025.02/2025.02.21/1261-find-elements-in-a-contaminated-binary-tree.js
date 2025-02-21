/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

import { Queue } from "@datastructures-js/queue";

/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
  // Solution 1: Keep tree (BFS / DFS) and search with tree
  // Time: O(N) for building, O(logN) for searching
  // Space: O(N)
  //   this.root = root;

  //   const queue = new Queue();
  //   queue.enqueue({ node: root, value: 0 });

  //   while (!queue.isEmpty()) {
  //     const { node, value } = queue.dequeue();
  //     node.val = value;

  //     if (node.left !== null) {
  //       queue.enqueue({ node: node.left, value: 2 * value + 1 });
  //     }

  //     if (node.right !== null) {
  //       queue.enqueue({ node: node.right, value: 2 * value + 2 });
  //     }
  //   }

  //   const dfs = (node, value) => {
  //     node.val = value;

  //     if (node.left !== null) {
  //       dfs(node.left, 2 * value + 1);
  //     }

  //     if (node.right !== null) {
  //       dfs(node.right, 2 * value + 2);
  //     }
  //   };

  //   if (root !== null) {
  //     dfs(root, 0);
  //   }

  // Solution 2: Set
  // Time: O(N) for building, O(1) for searching
  // Space: O(N)

  //   this.set = new Set();

  //   const dfs = (node, value) => {
  //     this.set.add(value);

  //     if (node.left !== null) {
  //       dfs(node.left, 2 * value + 1);
  //     }

  //     if (node.right !== null) {
  //       dfs(node.right, 2 * value + 2);
  //     }
  //   };

  //   if (root !== null) {
  //     dfs(root, 0);
  //   }

  // Solution 3: Array
  // Time: O(N) for building, O(1) for searching
  // Space: O(N)

  this.array = Array(10001).fill(false);

  const dfs = (node, value) => {
    this.array[value] = true;

    if (node.left !== null) {
      dfs(node.left, 2 * value + 1);
    }

    if (node.right !== null) {
      dfs(node.right, 2 * value + 2);
    }
  };

  if (root !== null) {
    dfs(root, 0);
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  // Solution 1
  //   const stack = [];
  //   let curr = target;
  //   while (curr > 0) {
  //     if (curr % 2 === 0) {
  //       stack.push(1);
  //       curr -= 2;
  //     } else {
  //       stack.push(0);
  //       curr -= 1;
  //     }
  //     curr = curr / 2;
  //   }
  //   let node = this.root;
  //   while (node !== null && stack.length > 0) {
  //     const direction = stack.pop();
  //     if (direction === 0) {
  //       node = node.left;
  //     } else {
  //       node = node.right;
  //     }
  //   }
  //   return stack.length === 0 && node !== null && node.val === target;
  // Solution 2: Set check
  //   return this.set.has(target);
  // Solution 3: Array check
  return this.array[target];
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
const root = new TreeNode(
  -1,
  new TreeNode(-1, new TreeNode(-1), new TreeNode(-1)),
  new TreeNode(-1)
);

//      0
//   1     2
// 3   4

const fe = new FindElements(root);
console.log(fe.find(3)); // true
console.log(fe.find(5)); // false
