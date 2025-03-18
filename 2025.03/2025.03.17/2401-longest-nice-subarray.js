/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  let start = 0,
    end = 0;
  let maxLength = 0;
  let number = 0;

  while (end < nums.length) {
    while ((number & nums[end]) !== 0) {
      number ^= nums[start];
      start++;
    }

    number |= nums[end];
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }

  return maxLength;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10])); // 3
