const sortByDepthThenByValue = (sorted) => {
  return sorted.sort((node1, node2) => {
    if (node1.depth !== node2.depth) {
      return node1.depth - node2.depth;
    }

    return node1.node.val - node2.node.val;
  });
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 30min
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  // Solution: BFS + Local Sort
  // Time: O(N*log(N / K)), where K is a number of columns in the result
  // Space: O(N)

  if (root === null) {
    return [];
  }

  // 1. Map: verticalIndex => number[]
  const map = new Map();

  // 2. minIndex, maxIndex
  let minIndex = 0;
  let maxIndex = 0;

  // 3. BFS: Queue + update Map
  const queue = new Queue();
  queue.enqueue({ node: root, index: 0, depth: 0 });
  while (!queue.isEmpty()) {
    const { node, index, depth } = queue.dequeue();

    minIndex = Math.min(minIndex, index);
    maxIndex = Math.max(maxIndex, index);

    const array = map.get(index) || [];
    array.push({ node, index, depth });
    map.set(index, array);

    if (node.left !== null) {
      queue.enqueue({ node: node.left, depth: depth + 1, index: index - 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, depth: depth + 1, index: index + 1 });
    }
  }

  // 4. iterate from minIndex to maxIndex, sort and put the result into answer
  const answer = [];

  for (let i = minIndex; i <= maxIndex; i++) {
    answer.push(sortByDepthThenByValue(map.get(i)).map(({ node }) => node.val));
  }

  // 5. return answer;
  return answer;
};

//    3
//  9   20
//    15  7

// map = {0: [Node(3), Node(15)], -1: [Node(9)], 1: [Node(20)], 2: [Node(7)]}
// minIndex = -1, maxIndex = 2
// queue = []
// {node: Node(3), index: 0}
// array = [Node(3)]
// {node: Node(9), index: -1}
// array = [Node(9)]
// {node: Node(20), index: 1}
// array = [Node(20)]
// {node: Node(15), index: 0}
// [Node(3), Node(15)]
// {node: Node(7), index: 2}
// array = [Node(7)]
// answer = [[Node(9)], [Node(3), Node(15)], [Node(20)], [Node(7)]]
// i = 2
