function maxProfit(prices: number[]): number {
  let min = Infinity,
    gain = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > gain) {
      gain = prices[i] - min;
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
