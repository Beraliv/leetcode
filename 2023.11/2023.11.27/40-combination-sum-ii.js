/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const combinations = [];

  const backtrack = (combination, startIndex, rest) => {
    if (rest === 0) {
      combinations.push(combination.slice());
      return;
    }

    for (let index = startIndex; index < candidates.length; index++) {
      if (index > startIndex && candidates[index] === candidates[index - 1]) {
        continue;
      }

      if (rest - candidates[index] >= 0) {
        combination.push(candidates[index]);
        backtrack(combination, index + 1, rest - candidates[index]);
        combination.pop();
      }
    }
  };

  backtrack([], 0, target);

  return combinations;
};
