/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  // Solution: Iterate + Collect (No HashSet)
  // Time: O(N)
  // Space: O(1)

  const indices = [];
  let lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      let start = Math.max(lastIndex + 1, i - k);
      let end = Math.min(nums.length - 1, i + k);

      for (let j = start; j <= end; j++) {
        indices.push(j);
        lastIndex = j;
      }
    }
  }

  return indices;
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
