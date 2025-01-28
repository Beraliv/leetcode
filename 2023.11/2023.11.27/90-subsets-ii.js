/**
 * 5min 30s
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // O(2 ** N) time, O(1) space (depends on sorting algorithm)

  // make sure duplicates are near each other
  nums.sort((a, b) => a - b);

  const answer = [[]];

  const subset = [];

  const backtrack = (startIndex) => {
    for (let index = startIndex; index < nums.length; index++) {
      if (index > startIndex && nums[index] === nums[index - 1]) {
        continue;
      }

      subset.push(nums[index]);
      answer.push([...subset]);
      backtrack(index + 1);
      subset.pop();
    }
  };

  backtrack(0);

  return answer;
};
