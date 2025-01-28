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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (root === null) {
    return [];
  }

  const map = new Map();
  let leftMostVerticalOrder = Infinity;
  const queue = new Queue();
  queue.enqueue({ node: root, verticalOrder: 0 });

  while (!queue.isEmpty()) {
    const { node, verticalOrder } = queue.dequeue();

    leftMostVerticalOrder = Math.min(leftMostVerticalOrder, verticalOrder);

    const list = map.get(verticalOrder) || [];
    list.push(node.val);
    map.set(verticalOrder, list);

    if (node.left !== null) {
      queue.enqueue({ node: node.left, verticalOrder: verticalOrder - 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, verticalOrder: verticalOrder + 1 });
    }
  }

  const result = [];
  for (
    let index = leftMostVerticalOrder;
    index < map.size + leftMostVerticalOrder;
    index++
  ) {
    result.push(map.get(index));
  }
  return result;
};

//   3
// 9   20
//   15  7

// map = {0: [3, 15], -1: [9], 1: [20], 2: [7]}, size = 4
// leftMostVerticalOrder = -1
// node = Node(3), verticalOder = 0, list = [3]
// node = Node(9), verticalOrder = -1, list = [9]
// node = Node(20), verticalOrder = 1, list = [20]
// node = Node(15), verticalOrder = 0, list = [3, 15]
// node = Node(7), verticalOrder = 2, list = [7]
// result = [[9], [3, 15], [20], [7]]
// index = 3
