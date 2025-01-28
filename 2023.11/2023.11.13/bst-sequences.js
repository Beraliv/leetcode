export {};

function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const addToBST = (root, value) => {
  let parent = root;
  while (true) {
    if (parent.value < value) {
      if (parent.right !== null) {
        parent = parent.right;
      } else {
        parent.right = new TreeNode(value);
        break;
      }
    }
    if (value < parent.value) {
      if (parent.left !== null) {
        parent = parent.left;
      } else {
        parent.left = new TreeNode(value);
        break;
      }
    }
  }
};

function BSTInfo(paths) {
  this.paths = paths;
}

// [2, 1], [4, 3] | [] | []
// [2], [4, 3] | [1] | []
// [], [4, 3] | [1, 2] | []
// [], [4] | [1, 2, 3] | []
// [], [] | [1, 2, 3, 4] | [[1, 2, 3, 4]]
// [2], [4] | [1, 3] | [[1, 2, 3, 4]]
// [], [4] | [1, 3, 2] | [[1, 2, 3, 4]]
// [], [] | [1, 3, 2, 4] | [[1, 2, 3, 4], [1, 3, 2, 4]]
// [], [4] | [1, 3, 2] | [[1, 2, 3, 4], [1, 3, 2, 4]]
// [2], [] | [1, 3, 4] | [[1, 2, 3, 4], [1, 3, 2, 4]]
// [], [] | [1, 3, 4, 2] | [[1, 2, 3, 4], [1, 3, 2, 4], [1, 3, 4, 2]]

const mergeBSTInfo = (left, right) => {
  const mergedPaths = [];

  if (left.paths.length === 0 || right.paths.length === 0) {
    mergedPaths.push(...left.paths);
    mergedPaths.push(...right.paths);
  } else {
    const findPaths = (left, right, path) => {
      if (left.length === 0 && right.length === 0) {
        mergedPaths.push([...path]);
      }

      if (left.length > 0) {
        const leftNext = left.pop();
        path.push(leftNext);
        findPaths(left, right, path);
        const leftPrevious = path.pop();
        left.push(leftPrevious);
      }

      if (right.length > 0) {
        const rightNext = right.pop();
        path.push(rightNext);
        findPaths(left, right, path);
        const rightPrevious = path.pop();
        right.push(rightPrevious);
      }
    };

    for (const leftPath of left.paths) {
      for (const rightPath of right.paths) {
        findPaths(leftPath, rightPath, []);
      }
    }
  }

  const mergedBSTInfo = new BSTInfo(mergedPaths);
  return mergedBSTInfo;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  if (nums.length < 1) {
    return nums.length;
  }

  // 1. Build BST

  let root = new TreeNode(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    addToBST(root, num);
  }

  // 2. Count

  const dfs = (node) => {
    if (node.left === null && node.right === null) {
      return new BSTInfo([[node.value]]);
    }

    const left = node.left !== null ? dfs(node.left) : new BSTInfo([]);
    const right = node.right !== null ? dfs(node.right) : new BSTInfo([]);

    const result = mergeBSTInfo(left, right);
    for (const paths of result.paths) {
      paths.push(node.value);
    }

    return result;
  };

  const bstInfo = dfs(root);

  for (const path of bstInfo.paths) {
    console.log(`[${path.join(", ")}]`);
  }
};

//      4
//   2     6
// 1   3 5   7

console.log(numOfWays([4, 2, 6, 1, 3, 5, 7]));
