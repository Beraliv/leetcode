/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  // Solution 1: 2D Iteration + Counting
  // Time: O(N ^ 2)
  // Space: O(1)

  //   let count = 0;
  //   for (let start = 0; start < nums.length; start++) {
  //     let sum = 0;
  //     for (let end = start; end < nums.length; end++) {
  //       sum += nums[end];
  //       if (sum * (end - start + 1) < k) {
  //         count++;
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  //   return count;

  // Solution 2: 2 Pointers + Counting
  // Time: O(N)
  // Space: O(1)

  let count = 0,
    sum = 0,
    start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (start <= end && sum * (end - start + 1) >= k) {
      sum -= nums[start];
      start++;
    }
    count += end - start + 1;
  }

  return count;
};

console.log(countSubarrays([2, 1, 4, 3, 5], 10)); // 6
console.log(countSubarrays([1, 1, 1], 5)); // 5
