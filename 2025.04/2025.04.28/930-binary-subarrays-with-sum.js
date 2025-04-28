// const numSubarrayLteK = (nums, k) => {
//   let count = 0,
//     sum = 0,
//     start = 0;

//   for (let end = 0; end < nums.length; end++) {
//     sum += nums[end];
//     while (start <= end && sum > k) {
//       sum -= nums[start++];
//     }
//     count += end - start + 1;
//   }

//   return count;
// };

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  // Solution 1: 2 Iteration + 2 Pointers + Counting
  // Time: O(N)
  // Space: O(1)

  //   return numSubarrayLteK(nums, goal) - numSubarrayLteK(nums, goal - 1);

  // Solution 2: Leading Zero + 2 Pointers + Counting
  // Time: O(N)
  // Space: O(1)

  let count = 0,
    sum = 0,
    start = 0,
    zeros = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (start < end && (nums[start] === 0 || sum > goal)) {
      if (nums[start] === 0) {
        zeros++;
      } else {
        zeros = 0;
      }
      sum -= nums[start++];
    }

    if (sum === goal) {
      count += zeros + 1;
    }
  }

  return count;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
console.log(numSubarraysWithSum([1, 0, 1, 0, 0], 2)); // 3
console.log(numSubarraysWithSum([0, 0, 1, 0, 1], 2)); // 3
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15
