/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  // Solution 1: Hash Map + 1 Loop + 2 Conditions
  // Time: O(N)
  // Space: O(N)

  let maxLength = 0;
  const countObj = {};

  for (const num of nums) {
    countObj[num] = (countObj[num] || 0) + 1;

    if (countObj[num - 1] !== undefined) {
      maxLength = Math.max(maxLength, countObj[num] + countObj[num - 1]);
    }
    if (countObj[num + 1] !== undefined) {
      maxLength = Math.max(maxLength, countObj[num] + countObj[num + 1]);
    }
  }

  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
