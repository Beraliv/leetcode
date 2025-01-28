/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const occurrences = Array(nums.length + 1).fill(false);

  for (const num of nums) {
    if (occurrences[num]) {
      return num;
    }

    occurrences[num] = true;
  }

  return -1;
};
