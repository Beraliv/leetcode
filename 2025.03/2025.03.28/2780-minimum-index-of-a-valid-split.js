/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  // Solution: HashMap + Iteration
  // Time: O(N)
  // Space: O(N)

  if (nums.length < 2) {
    return -1;
  }

  const secondMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (secondMap[num]) {
      secondMap[num]++;
    } else {
      secondMap[num] = 1;
    }
  }

  const firstMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    secondMap[num]--;
    if (firstMap[num]) {
      firstMap[num]++;
    } else {
      firstMap[num] = 1;
    }

    if (firstMap[num] * 2 > i + 1 && secondMap[num] * 2 > nums.length - i - 1) {
      return i;
    }
  }

  return -1;
};

console.log(minimumIndex([1, 2, 2, 2])); // 2
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])); // 4
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2])); // -1
