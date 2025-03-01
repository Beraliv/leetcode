/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  // Solution: Count number of odd/even numbers
  // Time: O(N)
  // Space: O(1)

  let even = 0,
    odd = 0;

  for (let num of nums) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  for (let i = 0; i < even; i++) {
    nums[i] = 0;
  }

  for (let i = even; i < nums.length; i++) {
    nums[i] = 1;
  }

  return nums;
};
