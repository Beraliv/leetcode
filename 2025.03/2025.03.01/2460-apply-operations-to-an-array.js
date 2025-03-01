/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  // Solution: 2 pointers
  // Time: O(N)
  // Space: O(1)

  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
      i += 2;
    } else {
      i++;
    }
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      while (j < i && nums[j] !== 0) {
        j++;
      }
      if (j !== i && nums[j] === 0) {
        nums[j] = nums[i];
        nums[i] = 0;
        j++;
      }
    }
  }

  return nums;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
