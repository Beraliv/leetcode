/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function (s1, s2) {
  const dp = Array.from({ length: s1.length + 1 }, () =>
    Array.from({ length: s2.length + 1 }, () => [])
  );

  const dfs = (i, j, diff) => {
    if (i === s1.length && j === s2.length) {
      return diff === 0;
    }

    if (dp[i][j][diff] !== undefined) {
      return dp[i][j][diff];
    }

    const ch1 = s1[i];
    const ch2 = s2[j];

    // Case 1. Full string match
    if (
      i < s1.length &&
      j < s2.length &&
      ch1 === ch2 &&
      diff === 0 &&
      dfs(i + 1, j + 1, diff)
    ) {
      return true;
    }

    // Case 2. Delete a character
    if (i < s1.length && isNaN(ch1) && diff < 0 && dfs(i + 1, j, diff + 1)) {
      return true;
    }
    if (j < s2.length && isNaN(ch2) && diff > 0 && dfs(i, j + 1, diff - 1)) {
      return true;
    }

    // Case 3. Delete a number
    let count = 0,
      value = 0;
    while (i + count < s1.length && count < 3 && !isNaN(s1[i + count])) {
      value = value * 10 + parseInt(s1[i + count]);
      count++;
      if (dfs(i + count, j, diff + value)) {
        return true;
      }
    }

    (count = 0), (value = 0);
    while (j + count < s2.length && count < 3 && !isNaN(s2[j + count])) {
      value = value * 10 + parseInt(s2[j + count]);
      count++;
      if (dfs(i, j + count, diff - value)) {
        return true;
      }
    }

    return (dp[i][j][diff] = false);
  };

  return dfs(0, 0, 0);
};
