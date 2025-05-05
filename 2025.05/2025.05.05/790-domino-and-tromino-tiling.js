const MOD = 1e9 + 7;

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // Solution 1: DP + Recurrent Formula
  // Time: O(N)
  // Space: O(N)

  //   const dp = new Array(n + 1).fill(0);
  //   dp[0] = 1;
  //   dp[1] = 1;
  //   dp[2] = 2;

  //   for (let i = 3; i <= n; i++) {
  //     // dp[i] = dp[i - 1] + dp[i - 2] + 2 * (dp[i - 3] + ... + dp[0]) =
  //     // dp[i - 1] + dp[i - 3] + dp[i - 2] + dp[i - 3] + 2 * (dp[i - 4] + ... + dp[0]) =
  //     // dp[i - 1] + dp[i - 3] + dp[i - 1] =
  //     // 2 * dp[i - 1] + dp[i - 3]

  //     dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % MOD;
  //   }

  //   return dp[n];

  // Solution 2: Recurrent Formula + 3 values
  // Time: O(N)
  // Space: O(1)

  // dp[i] = dp[i - 1] + dp[i - 2] + 2 * (dp[i - 3] + ... + dp[0]) =
  // dp[i - 1] + dp[i - 3] + dp[i - 2] + dp[i - 3] + 2 * (dp[i - 4] + ... + dp[0]) =
  // dp[i - 1] + dp[i - 3] + dp[i - 1] =
  // 2 * dp[i - 1] + dp[i - 3] = 2 * c + a
  // where a = dp[i - 3], b = dp[i - 2], c = dp[i - 1]

  let a = 1,
    b = 1,
    c = 2;

  if (n === 1) {
    return b;
  }

  if (n === 2) {
    return c;
  }

  for (let i = 3; i <= n; i++) {
    const d = (2 * c + a) % MOD;
    a = b;
    b = c;
    c = d;
  }

  return c;
};

console.log(numTilings(2)); // 2
console.log(numTilings(3)); // 5
console.log(numTilings(4)); // 11

// 2
// vv
// hh

// 3
// vvv
// vhh
// hhv
// tt (1)
// tt (2)

// 4
// vertical only on previous
// vvvv
// vhhv
// hhvv
// ttv (1)
// ttv (2)
// 2 vertical or 2 horizontal on the second to previous
// vvhh
// hhhh
// vtt (1)
// vtt (2)

// 4
// vvvv
// vhhv
// hhvv
// vvhh
// hhhh
// ttv (1)
// ttv (2)
// vtt (1)
// vtt (2)
// tht (1)
// tht (2)
