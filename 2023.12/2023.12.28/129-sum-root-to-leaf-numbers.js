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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  // Solution 1. DFS
  // Time: O(N)
  // Space: O(H)
  // let sum = 0;

  // if (root === null) {
  //     return sum;
  // }

  // const dfs = (node, value) => {
  //     const nextValue = value * 10 + node.val;

  //     if (node.left === null && node.right === null) {
  //         sum += nextValue;
  //         return;
  //     }

  //     if (node.left !== null) {
  //         dfs(node.left, nextValue);
  //     }

  //     if (node.right !== null) {
  //         dfs(node.right, nextValue);
  //     }
  // }

  // dfs(root, 0);

  // return sum;

  // Solution 2. BFS
  // Time: O(N)
  // Space: O(W)
  //   let sum = 0;
  //   const queue = new Queue();
  //   queue.enqueue({ node: root, value: 0 });

  //   while (!queue.isEmpty()) {
  //     const { node, value } = queue.dequeue();

  //     const nextValue = value * 10 + node.val;

  //     if (node.left === null && node.right === null) {
  //       sum += nextValue;
  //       continue;
  //     }

  //     if (node.left !== null) {
  //       queue.enqueue({ node: node.left, value: nextValue });
  //     }

  //     if (node.right !== null) {
  //       queue.enqueue({ node: node.right, value: nextValue });
  //     }
  //   }

  //   return sum;
  // Solution 3. Morris traversal
  // Time: O(N)
  // Space: O(1)
  let sum = 0;
  let currentSum = 0;

  while (root !== null) {
    if (root.left !== null) {
      let bottomRight = root.left;
      let nextSum = Math.floor(currentSum / 10);

      while (bottomRight.right !== null && bottomRight.right !== root) {
        bottomRight = bottomRight.right;
        nextSum = Math.floor(nextSum / 10);
      }

      if (bottomRight.right == null) {
        bottomRight.right = root;
        currentSum = currentSum * 10 + root.val;
        root = root.left;
      } else {
        bottomRight.right = null;
        if (bottomRight.left == null) {
          sum += currentSum;
        }
        currentSum = nextSum;
        root = root.right;
      }
    } else {
      currentSum = currentSum * 10 + root.val;
      if (root.right === null) {
        sum += currentSum;
      }
      root = root.right;
    }
  }

  return sum;
};

//  1
// 2 3
// bfs
// sum = 25
// queue = []
// node = Node(1), value = 0
// nextValue = 1
// node = Node(2), value = 1
// nextValue = 12
// node = Node(3), value = 1
// nextValue = 13
// sum = 25

// dfs
// sum = 25
// node = Node(1), value = 0
// nextValue = 1
// node = Node(2), value = 1
// nextValue = 12
// node = Node(3), value = 1
// nextValue = 13

// console.log(
//   sumNumbers(
//     new TreeNode(
//       1,
//       new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//       new TreeNode(3, new TreeNode(6), new TreeNode(7))
//     )
//   )
// );
