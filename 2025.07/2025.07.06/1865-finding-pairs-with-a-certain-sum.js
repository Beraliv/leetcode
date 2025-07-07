/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  // Solution: 2 Arrays and Hash Map
  // Time: O(N)
  // Space: O(N + M)
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (this.map.has(nums2[i])) {
      this.map.set(nums2[i], this.map.get(nums2[i]) + 1);
    } else {
      this.map.set(nums2[i], 1);
    }
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  // Solution: 2 Arrays and Hash Map
  // Time: O(1)
  // Space: O(1)

  if (this.map.get(this.nums2[index]) === 1) {
    this.map.delete(this.nums2[index]);
  } else {
    this.map.set(this.nums2[index], this.map.get(this.nums2[index]) - 1);
  }

  this.nums2[index] += val;
  this.map.set(this.nums2[index], (this.map.get(this.nums2[index]) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  // Solution: 2 Arrays and Hash Map, Iteration over nums1
  // Time: O(M)
  // Space: O(1)

  let count = 0;
  for (let i = 0; i < this.nums1.length; i++) {
    if (this.map.has(tot - this.nums1[i])) {
      count += this.map.get(tot - this.nums1[i]);
    }
  }
  return count;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
