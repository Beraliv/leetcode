/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  // Solution: 2 Pointers
  // Time: O(N)
  // Space: O(1)

  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    let j = i;
    while (j + 1 < nums.length && nums[i] === nums[j + 1]) {
      j++;
    }
    let isHill = nums[i - 1] < nums[j] && nums[j] > nums[j + 1];
    let isValley = nums[i - 1] > nums[j] && nums[j] < nums[j + 1];
    if (isHill || isValley) {
      count++;
    }
    i = j;
  }
  return count;
};
