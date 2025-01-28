/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinations = [];

  const backtrack = (combination, startIndex) => {
    if (combination.length === k) {
      combinations.push(combination.slice());
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      combination.push(i);
      backtrack(combination, i + 1);
      combination.pop();
    }
  };

  backtrack([], 1);

  return combinations;
};
