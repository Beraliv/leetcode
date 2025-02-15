const canPartitionSquareOf = (n) => {
  // S, or the length of a square of N, equals to ~log(N ^ 2)
  // Time: O(N ^ 0.6), or calculated from O(2 ^ log(N ^ 2)) = O(N ^ (2 * log2))
  // Space: O(N)

  let canPartition = false;
  const s = `${n * n}`;

  const dfs = (index, number, sum) => {
    if (canPartition) return;
    if (index >= s.length) {
      if (sum + number === n) {
        canPartition = true;
      }
      return;
    }
    if (sum > n) return;

    const digit = Number(s[index]);
    const nextNumber = number * 10 + digit;

    if (nextNumber > n) {
      dfs(index + 1, digit, sum + number);
    } else {
      dfs(index + 1, nextNumber, sum);
      dfs(index + 1, digit, sum + number);
    }
  };

  dfs(0, 0, 0);

  return canPartition;
};

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  // Solution 1: DFS
  // Time: O(N ^ 1.6)
  // Space: O(N)

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (canPartitionSquareOf(i)) {
      sum += i * i;
    }
  }
  return sum;
};
