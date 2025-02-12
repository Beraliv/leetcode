/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // Solution: Backtrack (combination, rest, start)
  // Time: O(T / M * N ^ (T / M + 1)), N - number of candidates, T - target value, M - minimal value across candidates
  // Space: O(T / M)

  const backtrack = (combination, rest, start) => {
    if (rest < 0) {
      return;
    }
    if (rest === 0) {
      answer.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, rest - candidates[i], i);
      combination.pop();
    }
  };

  const answer = [];
  backtrack([], target, 0);
  return answer;
};
