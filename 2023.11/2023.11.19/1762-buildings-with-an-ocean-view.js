const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  let max = -Infinity;
  const answer = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];

    if (height > max) {
      answer.push(i);
      max = height;
    }
  }

  for (let i = 0; i < answer.length / 2; i++) {
    swap(answer, i, answer.length - 1 - i);
  }

  return answer;
};

// heights = [4, 2, 3, 1]
// max = 3
// answer = [3, 2, 0]
// i = 0, 3 - 1 = 2 => [0, 2, 3]
// i = 1, 3 - 1 - 1 = 1 => [0, 2, 3]
