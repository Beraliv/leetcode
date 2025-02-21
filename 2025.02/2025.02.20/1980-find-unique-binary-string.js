/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  // Solution: Cantor's Diagonal Argument
  // Time: O(N)
  // Space: O(N)

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(nums[i][i] == "0" ? "1" : "0");
  }

  return answer.join("");
};
