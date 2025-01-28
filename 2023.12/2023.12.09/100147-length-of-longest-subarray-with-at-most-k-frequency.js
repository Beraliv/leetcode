/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const frequencyMap = new Map();

  let i = 0;
  let j = 0;
  let maxLength = -Infinity;

  while (i < nums.length && j < nums.length) {
    const frequency = (frequencyMap.get(nums[j]) || 0) + 1;
    if (frequency > k) {
      maxLength = Math.max(maxLength, j - i);
      while (frequencyMap.get(nums[j]) === frequency - 1) {
        const updatedFrequency = frequencyMap.get(nums[i]) - 1;
        if (updatedFrequency > 0) {
          frequencyMap.set(nums[i], updatedFrequency);
        } else {
          frequencyMap.delete(nums[i]);
        }
        i++;
      }
      frequencyMap.set(nums[j], frequency - 1);
    } else {
      frequencyMap.set(nums[j], frequency);
    }
    j++;
  }

  maxLength = Math.max(maxLength, j - i);

  return maxLength;
};

// nums = 1, 2, 1, 2, 1, 2; k = 1

// frequencyMap = {1: 1, 2: 1}
// i = 0, j = 2
// maxLength = 2

// nums[0] = 1
// frequency = 1
// nums[1] = 2
// frequency = 1
// nums[2] = 1
// frequency = 2
// updatedFrequency = 0
