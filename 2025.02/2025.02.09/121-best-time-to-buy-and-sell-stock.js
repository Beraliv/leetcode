function maxProfit(prices) {
  // Solution: Iteration with minPrice and gain maximisation
  // Time: O(N)
  // Space: O(1)

  let minPrice = Infinity,
    gain = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > gain) {
      gain = prices[i] - minPrice;
    }
  }

  return gain;
}

// 1. [7,1,5,3,6,4]
// min = Inf, max = -Inf
// i = 0, min = 7
// i = 1, min = 1
// i = 2, gain = 4
// i = 3
// i = 4, gain = 5
// i = 5
// returns 5
