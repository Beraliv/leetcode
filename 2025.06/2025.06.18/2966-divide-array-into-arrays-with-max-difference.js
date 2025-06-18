/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  // Solution: Sort + Greedy
  // Time: O(N log N)
  // Space: O(N)

  nums.sort((a, b) => a - b);

  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; i += 3) {
    let a = nums[i],
      b = nums[i + 1],
      c = nums[i + 2];

    if (c - a > k) {
      return [];
    }

    result.push([a, b, c]);
  }

  return result;
};

console.log(
  divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14)
); // non-empty array
