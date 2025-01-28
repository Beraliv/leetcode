const last = (array) => array[array.length - 1];

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const answer = [];

  const dfs = (combination, rest) => {
    if (rest === 0) {
      answer.push([...combination]);
    }

    for (const candidate of candidates) {
      if (combination.length > 0 && candidate < last(combination)) {
        continue;
      }

      if (candidate <= rest) {
        combination.push(candidate);
        dfs(combination, rest - candidate);
        combination.pop();
      }
    }
  };

  dfs([], target);

  return answer;
};
