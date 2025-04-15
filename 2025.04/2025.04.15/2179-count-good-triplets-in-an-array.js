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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function (nums1, nums2) {
  // Solution: Binary Indexed Tree
  // Time: O(N log N)
  // Space: O(N)

  const positionMap = {};
  for (let i = 0; i < nums1.length; i++) {
    positionMap[nums1[i]] = i;
  }

  const mapped = new Array(nums1.length).fill(0);
  for (let i = 0; i < nums2.length; i++) {
    mapped[i] = positionMap[nums2[i]];
  }

  const tree = new BinaryIndexTree(nums1.length);
  let result = 0;
  for (let value = 0; value < mapped.length; value++) {
    const position = mapped[value];
    const left = tree.query(position);
    tree.update(position, 1);
    const right = mapped.length - 1 - position - (value - left);
    result += left * right;
  }
  return result;
};

console.log(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3])); // 1
console.log(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3])); // 4

// 1, 2, 0, 3 => 1
// 0, 2, 1, 4, 3
