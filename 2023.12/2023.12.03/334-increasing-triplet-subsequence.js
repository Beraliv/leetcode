/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let a, b;
  a = b = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= a) {
      a = nums[i];
    } else if (nums[i] <= b) {
      b = nums[i];
    } else {
      return true;
    }
  }

  return false;
};

// 1 < 2 < 3
// 2 > 1 < 3
// 1 < 3 > 2
// 3 > 2 > 1

// [1,2,0,3]
// [4,1,2,3]
// [4,5,1,6]
