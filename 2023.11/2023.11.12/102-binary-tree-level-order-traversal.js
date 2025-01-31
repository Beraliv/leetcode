import { Queue } from "@datastructures-js/queue";

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const levels = [];

  const queue = new Queue();
  queue.enqueue({ node: root, level: 0 });

  while (!queue.isEmpty()) {
    const { node, level } = queue.dequeue();

    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node.val);

    if (node.left !== null) {
      queue.enqueue({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, level: level + 1 });
    }
  }

  return levels;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// const createTree = (arr, i = 0) => {
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;

//   return new TreeNode(
//     arr[i],
//     left < arr.length && arr[left] !== null ? createTree(arr, left) : null,
//     right < arr.length && arr[right] !== null ? createTree(arr, right) : null
//   );
// };

// console.log(levelOrder(createTree([3, 9, 20, null, null, 15, 7])));
