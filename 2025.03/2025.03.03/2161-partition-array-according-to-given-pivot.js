/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  // Solution: 2 pointers
  // Time: O(N)
  // Space: O(1)

  if (nums.length < 1) {
    return nums;
  }

  let start = 0,
    end = nums.length - 1;
  const answer = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      answer[start++] = nums[i];
    }
    let j = nums.length - 1 - i;
    if (nums[j] > pivot) {
      answer[end--] = nums[j];
    }
  }

  while (start <= end) {
    answer[start++] = pivot;
  }

  return answer;
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9,5,3,10,10,12,14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3,2,4,3]
