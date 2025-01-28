function maxProfit(prices: number[]): number {
  if (prices.length === 0) {
    return 0;
  }

  let min = prices[0],
    gain = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      gain += prices[i - 1] - min;
      min = prices[i];
    }
  }

  if (prices[prices.length - 1] > min) {
    gain += prices[prices.length - 1] - min;
  }

  return gain;
}

// [7,1,5,3,6,4]
// min = 7
// i = 1, gain = 0, min = 1
// i = 2
// i = 3, gain = 4, min = 3
// i = 4
// i = 5, gain = 7, min = 4
// return 7

// [1, 2, 3, 4, 5]
// min = 1, gain = 0
// i = 1
// i = 2
// i = 3
// i = 4
// gain = 4
// return 4

// [5, 4, 3, 2, 1]
// min = 5, gain = 0
// i = 1, gain = 0, min = 4
// ...
// i = 4, gain = 0, min = 1
// return 0
