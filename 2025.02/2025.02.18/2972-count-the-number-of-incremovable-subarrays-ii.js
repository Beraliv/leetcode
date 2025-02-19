/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  // Solution: Binary Search
  // Time: O(N * logR), where N is number of elements, R is number of removal starts
  // Space: O(1)

  let right = 1;
  while (right < nums.length && nums[right - 1] < nums[right]) {
    right++;
  }

  if (right === nums.length) {
    return (nums.length * (nums.length + 1)) / 2;
  }

  // number of single removals
  let answer = right + 1;
  let last = Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= last) {
      break;
    }
    let low = 0,
      high = right - 1;
    let left = -1;

    while (low <= high) {
      let mid = (low + high) >> 1;
      if (nums[mid] < nums[i]) {
        left = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    // number of removals between 0 and i
    answer += left + 2;
    last = nums[i];
  }

  return answer;
};

console.log(incremovableSubarrayCount([1, 2, 3, 4])); // 10 (all)
console.log(incremovableSubarrayCount([6, 5, 7, 8])); // 7
//                                     -
//                                     ----
//                                     -------
//                                     ----------
//                                        -
//                                        ----
//                                        -------
console.log(incremovableSubarrayCount([8, 7, 6, 6])); // 3
//                                     ----------
//                                        -------
//                                     -------
