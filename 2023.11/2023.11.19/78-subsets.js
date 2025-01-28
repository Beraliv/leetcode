/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [[]];

  const subset = [];

  const backtrack = (startIndex) => {
    for (let index = startIndex; index < nums.length; index++) {
      const element = nums[index];

      subset.push(element);
      answer.push([...subset]);
      backtrack(index + 1);
      subset.pop();
    }
  };

  backtrack(0);

  return answer;
};

// nums = [1, 2, 3]
// answer = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

//              []
//       1      2     3
//    12   13   23
// 123
