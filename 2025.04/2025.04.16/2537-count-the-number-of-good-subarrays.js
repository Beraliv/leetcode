/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  // Solution: 2 Pointers + HashMap
  // Time: O(N)
  // Space: O(N)

  let subsequences = 0,
    count = 0,
    right = 0;
  const countMap = new Map();
  for (let left = 0; left < nums.length; left++) {
    while (count < k && right < nums.length) {
      const localCount = countMap.get(nums[right]) || 0;
      count += localCount;
      countMap.set(nums[right], localCount + 1);
      right++;
    }
    if (count >= k) {
      subsequences += nums.length - right + 1;
    }
    const localCount = countMap.get(nums[left]) - 1;
    countMap.set(nums[left], localCount);
    count -= localCount;
  }
  return subsequences;
};

// 1 1 1 1
// countMap[1] = 4
// count = 0 + 1 + 2 + 3 = 6
// countMap[1] = 3
// count = 0 + 1 + 2 = 3
// countMap[1] = 2
// count = 0 + 1 = 1

console.log(countGood([1, 1, 1, 1, 1], 10)); // 1
console.log(countGood([1, 1, 1, 1, 1], 3)); // 6
console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2)); // 4
