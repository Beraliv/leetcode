/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // Solution 1: HashMap Cache + Count pairs
  // Time: O(N)
  // Space: O(1), as it's limited to 100

  //   const map = new Map();
  //   for (let [a, b] of dominoes) {
  //     if (a > b) {
  //       [b, a] = [a, b];
  //     }

  //     const key = a * 10 + b;

  //     map.set(key, (map.get(key) || 0) + 1);
  //   }

  //   let count = 0;
  //   for (let value of map.values()) {
  //     count += (value * (value - 1)) / 2;
  //   }
  //   return count;

  // Solution 2: Array Cache + Count pairs
  // Time: O(N)
  // Space: O(1)
  //   const cache = new Array(100).fill(0);
  //   for (let [a, b] of dominoes) {
  //     if (a > b) {
  //       [b, a] = [a, b];
  //     }

  //     cache[a * 10 + b]++;
  //   }
  //   let count = 0;
  //   for (let i = 0; i < cache.length; i++) {
  //     count += (cache[i] * (cache[i] - 1)) / 2;
  //   }
  //   return count;

  // Solution 3: Array Cache + Calculate pairs in one pass
  // Time: O(N)
  // Space: O(1)

  const cache = new Array(100).fill(0);
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    let a = dominoes[i][0];
    let b = dominoes[i][1];
    const key = a > b ? b * 10 + a : a * 10 + b;
    count += cache[key];
    cache[key]++;
  }
  return count;
};
