/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) {
    return null;
  }

  const map = new Map();
  const queue = new Queue();
  queue.enqueue(node);
  map.set(node, new Node(node.val));

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    const cloneNode = map.get(node);

    for (const neightbour of node.neighbors) {
      if (!map.has(neightbour)) {
        map.set(neightbour, new Node(neightbour.val));
        queue.enqueue(neightbour);
      }

      cloneNode.neighbors.push(map.get(neightbour));
    }
  }

  return map.get(node);
};
