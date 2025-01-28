/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.map.set(i, nums[i]);
    }
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;
  let least, most;

  if (this.map.size < vec.map.size) {
    least = this.map;
    most = vec.map;
  } else {
    least = vec.map;
    most = this.map;
  }

  for (const [index, value] of least.entries()) {
    if (most.has(index)) {
      sum += value * most.get(index);
    }
  }
  return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
