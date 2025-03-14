const getAmount = (candies, pile) => {
  let amount = 0;

  for (let i = 0; i < candies.length; i++) {
    amount += Math.floor(candies[i] / pile);
  }

  return amount;
};

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  // Solution: Binary Search + Counting
  // Time: O(logN * N), N - number of candies
  // Space: O(1)

  let sum = 0,
    max = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    sum += candies[i];
    max = Math.max(max, candies[i]);
  }
  if (sum < k) {
    return 0;
  }
  let start = 0,
    end = max,
    answer = 0;
  while (start <= end) {
    let middle = (start + end) >> 1;

    if (getAmount(candies, middle) >= k) {
      answer = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return answer;
};
