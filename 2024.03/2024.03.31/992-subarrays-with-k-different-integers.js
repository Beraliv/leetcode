/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const distinct = Array.from({ length: nums.length + 1 }, () => 0);

  let totalCount = 0,
    left = 0,
    right = 0,
    count = 0;

  while (right < nums.length) {
    distinct[nums[right]]++;

    if (distinct[nums[right]] === 1) {
      k--;
    }

    right++;

    if (k < 0) {
      distinct[nums[left]]--;
      left++;
      k++;
      count = 0;
    }

    if (k === 0) {
      while (distinct[nums[left]] > 1) {
        distinct[nums[left]]--;
        left++;
        count++;
      }

      totalCount += count + 1;
    }
  }

  return totalCount;
};
