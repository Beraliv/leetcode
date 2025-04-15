// Or BIT
class BinaryIndexTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, value) {
    index++;
    while (index < this.tree.length) {
      this.tree[index] += value;
      index += index & -index;
    }
  }
  query(index) {
    index++;
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  // Solution: Binary Indexed Tree
  // Time: O(N log N)
  // Space: O(N)

  const set = new Set(nums);
  const sorted = Array.from(set).sort((a, b) => a - b);
  const positionMap = {};
  for (let i = 0; i < sorted.length; i++) {
    positionMap[sorted[i]] = i;
  }
  const mapped = nums.map((value) => positionMap[value]);
  const result = new Array(nums.length).fill(0);
  const tree = new BinaryIndexTree(nums.length);
  for (let i = mapped.length - 1; i >= 0; i--) {
    const value = mapped[i];
    result[i] = tree.query(value);
    tree.update(value + 1, 1);
  }
  return result;
};

// [1, 2, 5, 6] => [0, 1, 2, 3]
console.log(countSmaller([5, 2, 6, 1])); // [2, 1, 1, 0]
console.log(countSmaller([-1])); // [0]
console.log(countSmaller([-1, -1])); // [0, 0]
