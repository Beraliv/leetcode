import { Deque } from "@datastructures-js/deque";

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  // Solution 1: DP
  // Time: O(N ^ 2)
  // Space: O(N)

  //   const n = prices.length;
  //   if (n === 0) {
  //     return 0;
  //   }

  //   const dp = Array(n + 1).fill(Infinity);
  //   dp[n] = 0;

  //   for (let i = n - 1; i >= 0; i--) {
  //     // 2 * i + 3 = next index (i + 1) + get next fruits for free (between 0 and i + 1, both incl.)
  //     for (let j = i + 1; j <= Math.min(2 * i + 2, n); j++) {
  //       dp[i] = Math.min(dp[i], dp[j] + prices[i]);
  //     }
  //   }

  //   return dp[0];

  // Solution 2: DP + Queue
  //
  const n = prices.length;
  if (n === 0) {
    return 0;
  }

  const q = new Deque();
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    while (!q.isEmpty() && (q.front() + 1) * 2 < i) {
      q.popFront();
    }

    while (
      !q.isEmpty() &&
      dp[q.back()] + prices[q.back()] >= dp[i - 1] + prices[i - 1]
    ) {
      q.popBack();
    }

    q.pushBack(i - 1);

    dp[i] = dp[q.front()] + prices[q.front()];
  }

  return dp[n];
};

console.log(minimumCoins([1, 10, 1, 1])); // 2
