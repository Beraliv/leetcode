const MOD = 1000000007;

var possibleStringCount = function (word, k) {
  // Solution: Frequency Count + DP 1D
  // Time: O(N + K ^ 2)
  // Space: O(K)

  let count = 1;
  const frequencies = [];

  for (let i = 1; i < word.length; ++i) {
    if (word[i] === word[i - 1]) {
      count++;
    } else {
      frequencies.push(count);
      count = 1;
    }
  }
  frequencies.push(count);

  let allCombinations = 1;
  for (const frequency of frequencies) {
    allCombinations = (allCombinations * frequency) % MOD;
  }

  if (frequencies.length >= k) {
    return allCombinations;
  }

  // g(i, j) = (f(i, 0) + f(i, 1) + ... + f(i, j)) % MOD
  // where f(i, j) is the number of ways to construct a string of length j using the first i frequencies
  let g = new Array(k).fill(1); // 1 way to construct an empty string

  for (let i = 0; i < frequencies.length; i++) {
    const f = new Array(k).fill(0);
    for (let j = 1; j < k; j++) {
      f[j] = g[j - 1];
      if (j - frequencies[i] - 1 >= 0) {
        f[j] = (f[j] - g[j - frequencies[i] - 1] + MOD) % MOD;
      }
    }

    const gNext = new Array(k).fill(0);
    gNext[0] = f[0];
    for (let j = 1; j < k; j++) {
      gNext[j] = (gNext[j - 1] + f[j]) % MOD;
    }

    g = gNext;
  }
  return (allCombinations - g[k - 1] + MOD) % MOD;
};

console.log(possibleStringCount("aabbccdd", 7)); // 5
console.log(possibleStringCount("aabbccdd", 8)); // 1
console.log(possibleStringCount("aaabbb", 3)); // 8
