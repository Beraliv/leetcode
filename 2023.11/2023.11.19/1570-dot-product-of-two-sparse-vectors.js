/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  // Approach 1. HashMap
  // Time: O(N)
  // Space: O(K), where K is number of non-zero elements
  // this.map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) {
  //     this.map.set(i, nums[i]);
  //   }
  // }

  // Approach 2. Pairs
  // Time: O(N)
  // Space: O(K)
  this.pairs = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.pairs.push([i, nums[i]]);
    }
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  // Approach 1. HashMap
  // Time: O(min(K, L))
  // Space: O(1)

  // let sum = 0;
  // let least, most;

  // if (this.map.size < vec.map.size) {
  //   least = this.map;
  //   most = vec.map;
  // } else {
  //   least = vec.map;
  //   most = this.map;
  // }

  // for (const [index, value] of least.entries()) {
  //   if (most.has(index)) {
  //     sum += value * most.get(index);
  //   }
  // }
  // return sum;

  // Approach 2: Pairs
  // Time: O(K + L)
  // Space: O(1)
  const [small, big] =
    this.pairs.length < vec.pairs.length
      ? [this.pairs, vec.pairs]
      : [vec.pairs, this.pairs];

  let i = 0,
    j = 0;
  let product = 0;

  while (i < small.length && j < big.length) {
    if (small[i][0] < big[j][0]) {
      i++;
    } else if (small[i][0] > big[j][0]) {
      j++;
    } else {
      product += small[i][1] * big[j][1];
      i++;
      j++;
    }
  }

  return product;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
