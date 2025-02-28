const reverse = (arr) => {
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  // Solution: DP
  // Time: O(M * N)
  // Spae: O(M * N)

  const m = str1.length;
  const n = str2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let row = 0; row <= m; row++) {
    dp[row][0] = row;
  }

  for (let col = 0; col <= n; col++) {
    dp[0][col] = col;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  const answer = [];
  let row = m,
    col = n;

  while (row > 0 && col > 0) {
    if (str1[row - 1] === str2[col - 1]) {
      answer.push(str1[row - 1]);
      row--;
      col--;
    } else if (dp[row - 1][col] < dp[row][col - 1]) {
      answer.push(str1[row - 1]);
      row--;
    } else {
      answer.push(str2[col - 1]);
      col--;
    }
  }

  while (row > 0) {
    answer.push(str1[row - 1]);
    row--;
  }

  while (col > 0) {
    answer.push(str2[col - 1]);
    col--;
  }

  reverse(answer);
  return answer.join("");
};

console.log(shortestCommonSupersequence("abac", "cab"));
