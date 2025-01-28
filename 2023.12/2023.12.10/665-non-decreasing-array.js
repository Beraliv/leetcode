/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let changed = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }

    if (changed) {
      return false;
    }

    changed = true;

    // i === 0
    // [4, 3]
    //  ^0 ^1
    // i > 0
    // [2, 4, 3]
    //     ^i ^i + 1
    if (i === 0 || nums[i - 1] <= nums[i + 1]) {
      nums[i] = nums[i + 1];
    }
    // [3, 4, 2]
    //     ^i ^i + 1
    else {
      nums[i + 1] = nums[i];
    }
  }

  return true;
};
