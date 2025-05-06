/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  // Solution 1: Array + 1 Loop
  // Time: O(N)
  // Space: O(1)

  //   const result = new Array(nums.length);
  //   for (let i = 0; i < nums.length; i++) {
  //     result[i] = nums[nums[i]];
  //   }
  //   return result;

  // Solution 2: 2 Loops + In-place calculation
  // Time: O(N)
  // Space: O(1)

  // 1 => 1_000
  // 500 => 500_000
  // 999 => 999_000

  for (let i = 0; i < nums.length; i++) {
    nums[i] += (nums[nums[i]] % 1000) * 1000;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(nums[i] / 1000);
  }

  return nums;
};

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]
console.log(buildArray([5, 0, 1, 2, 3, 0])); // [4,5,0,1,2,3]
