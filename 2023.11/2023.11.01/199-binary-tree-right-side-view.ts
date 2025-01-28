export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type LevelledNode = {
  node: TreeNode;
  level: number;
};

// 19m
// O(N) time, O(W + H) space
function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  // O(H), where H
  const answer: number[] = [];
  // 1. bfs + level
  // TODO: implement Queue
  // 1. append (use [].push)
  // 2. removee (use [].shift)
  // O(W), W is max number of leaves in a complete tree
  let queue: LevelledNode[] = [];
  queue.push({ node: root, level: 1 });

  let previousLevelledNode: LevelledNode | null = null;

  // O(N), N is number of nodes in the tree
  while (queue.length > 0) {
    const levelledNode = queue.shift()!;

    if (
      previousLevelledNode !== null &&
      previousLevelledNode.level !== levelledNode.level
    ) {
      answer.push(previousLevelledNode.node.val);
    }

    previousLevelledNode = levelledNode;

    if (levelledNode.node.left) {
      queue.push({
        node: levelledNode.node.left,
        level: levelledNode.level + 1,
      });
    }

    if (levelledNode.node.right) {
      queue.push({
        node: levelledNode.node.right,
        level: levelledNode.level + 1,
      });
    }
  }

  answer.push(previousLevelledNode!.node.val);

  // 2. get last value from each level
  return answer;
}
