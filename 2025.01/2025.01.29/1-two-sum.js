// easy
// time is 5:46
// best receivable time is O(N), where N is nums.length
// best recevable space is O(1) (which may lead to O(N**2) time)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Solution: HashMap
  // Time: O(N)
  // Space: O(N)
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // O(1) time
    if (map.hasOwnProperty(target - num)) {
      return [map[target - num], i];
    }

    map[nums[i]] = i;
  }
};
