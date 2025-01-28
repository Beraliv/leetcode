/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // O(N) space
  // if (root === null) {
  //     return null;
  // }

  // const queue = new Queue();
  // queue.enqueue({node: root, level: 1});

  // let prevNode = null;
  // let previousLevel = 0;
  // while (!queue.isEmpty()) {
  //     const {node, level} = queue.dequeue();

  //     if (level !== previousLevel) {
  //         previousLevel = level;
  //     } else {
  //         prevNode.next = node;
  //     }

  //     if (node.left !== null) {
  //         queue.enqueue({node: node.left, level: level + 1});
  //     }

  //     if (node.right !== null) {
  //         queue.enqueue({node: node.right, level: level + 1});
  //     }

  //     prevNode = node;
  // }

  // return root;
  // O(1) space
  if (root === null) {
    return null;
  }

  let leftmost = root;

  while (leftmost.left !== null) {
    let head = leftmost;

    while (head !== null) {
      head.left.next = head.right;

      if (head.next !== null) {
        head.right.next = head.next.left;
      }

      head = head.next;
    }

    leftmost = leftmost.left;
  }

  return root;
};
