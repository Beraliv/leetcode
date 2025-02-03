/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Time: O(N)
  // Space: O(1)

  if (nums.length < 1) {
    return nums;
  }

  const product = Array(nums.length).fill(1);
  let value = 1;
  for (let i = 1; i < nums.length; i++) {
    value *= nums[i - 1];
    product[i] *= value;
  }
  value = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    value *= nums[i + 1];
    product[i] *= value;
  }

  return product;
};

// arr = [1, 2, 3, 4]
// value = 24, product = [24, 12, 8, 6]
// i = 0

console.log(productExceptSelf([1, 2, 3, 4]));

// arr = [1, 2, 3, 4]
// left = [1, 2, 6, 24]
// right = [24, 24, 12, 4]
// returns [24, 12, 8, 6]
// [1, 1, 8, 6]
