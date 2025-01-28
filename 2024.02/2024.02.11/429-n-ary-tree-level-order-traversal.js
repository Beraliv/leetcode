/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  const answer = [];

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const size = queue.size();

    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();

      level.push(node.val);

      for (const child of node.children) {
        queue.enqueue(child);
      }
    }

    answer.push(level);
  }

  return answer;
};
