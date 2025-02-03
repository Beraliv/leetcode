/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  if (nums.length < 2) {
    return true;
  }

  let decreased = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      // expected
      continue;
    }

    if (decreased) {
      // double decrease
      return false;
    }

    decreased = true;
  }

  return !(nums.length > 1 && decreased && nums[nums.length - 1] > nums[0]);
};

console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([1, 1, 1])); // true
console.log(check([2, 1, 3, 4])); // false
