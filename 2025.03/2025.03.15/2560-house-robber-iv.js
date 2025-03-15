/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let min = Infinity,
    max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  if (k === 1) {
    return min;
  }

  let start = min,
    end = max;
  while (start < end) {
    let middle = (start + end) >> 1;

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= middle) {
        count++;
        i++;
      }
    }

    if (count >= k) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return start;
};

console.log(minCapability([2, 3, 5, 9], 2)); // 5 (2, 5)
console.log(minCapability([2, 7, 9, 3, 1], 2)); // 2 (2, 1)
console.log(minCapability([7, 3, 9, 5], 2)); // 5 (3, 5)
