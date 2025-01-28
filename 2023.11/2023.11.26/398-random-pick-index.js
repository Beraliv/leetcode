/**
 * 12min
 * O(N) time, O(N) space
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};
/**
 * O(1) time and space
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let index = 0;
  let chosenIndex = -1;

  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      index++;
      const randomIndex = Math.floor(Math.random() * index);
      if (randomIndex === index - 1) {
        chosenIndex = i;
      }
    }
  }

  return chosenIndex;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

//  [0, 1, 0]
// new Solution
// map = {0: [0, 2]}, 1: [1]}
// pick(0)
// array = [0]
// length = 2
// index = 1
// answer = 2
// return => 2
