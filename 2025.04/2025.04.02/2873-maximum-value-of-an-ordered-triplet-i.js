/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  // Solution 1: Brute Force
  // Time: O(N ^ 3)
  // Space: O(1)

  //   let max = 0;
  //   for (let i = 0; i < nums.length - 2; i++) {
  //     for (let j = i + 1; j < nums.length - 1; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         const value = (nums[i] - nums[j]) * nums[k];
  //         max = Math.max(max, value);
  //       }
  //     }
  //   }
  //   return max;

  // Solution 2: Prefix/Suffix + Linear
  // Time: O(N)
  // Space: O(N)

  //   let n = nums.length;
  //   if (n === 0) {
  //     return 0;
  //   }

  //   let leftMax = new Array(nums.length).fill(0);
  //   let rightMax = new Array(nums.length).fill(0);

  //   for (let i = 1; i < n; i++) {
  //     leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
  //     rightMax[n - i - 1] = Math.max(rightMax[n - i], nums[n - i]);
  //   }
  //   let max = 0;
  //   for (let i = 1; i < n - 1; i++) {
  //     const value = (leftMax[i] - nums[i]) * rightMax[i];
  //     max = Math.max(max, value);
  //   }
  //   return max;

  // Solution 3: Greedy + Linear
  // Time: O(N)
  // Space: O(1)

  let multMax = 0,
    diffMax = 0,
    elemMax = 0;
  for (let i = 0; i < nums.length; i++) {
    multMax = Math.max(multMax, nums[i] * diffMax);
    diffMax = Math.max(diffMax, elemMax - nums[i]);
    elemMax = Math.max(elemMax, nums[i]);
  }
  return multMax;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7])); // 77
console.log(maximumTripletValue([1, 10, 3, 4, 19])); // 133
console.log(maximumTripletValue([1, 2, 3])); // 0
