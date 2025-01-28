/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const groups = new Map();
  let n = 0;
  for (let row = nums.length - 1; row >= 0; row--) {
    for (let col = 0; col < nums[row].length; col++) {
      const diag = col + row;
      const group = groups.get(diag) || [];
      group.push(nums[row][col]);
      groups.set(diag, group);
      n++;
    }
  }

  const answer = Array(n).fill(0);
  let i = 0;
  let curr = 0;

  while (groups.has(curr)) {
    for (const num of groups.get(curr)) {
      answer[i++] = num;
    }

    curr++;
  }

  return answer;
};
