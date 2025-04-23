const MOD = 1e9 + 7;
const MAX_VALUE = 10001;
const MAX_PRIME_FACTOR = 15;
const counts = Array.from({ length: MAX_VALUE }, () =>
  Array(MAX_PRIME_FACTOR).fill(0)
);
const sieve = Array.from({ length: MAX_VALUE }, () =>
  Array(MAX_PRIME_FACTOR).fill(0)
);

(function init() {
  for (let s = 0; s < MAX_VALUE; s++) {
    sieve[s][0] = 1;
    for (let r = 1; r <= Math.min(s, MAX_PRIME_FACTOR); r++) {
      sieve[s][r] = (sieve[s - 1][r - 1] + sieve[s - 1][r]) % MOD;
    }
  }

  for (let div = 1; div < MAX_VALUE; div++) {
    counts[div][0]++;
    for (let i = div * 2; i < MAX_VALUE; i += div) {
      for (let bars = 0; bars < MAX_PRIME_FACTOR; bars++) {
        if (counts[div][bars]) {
          counts[i][bars + 1] += counts[div][bars];
        }
      }
    }
  }
})();

/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
  let answer = 0;
  for (let i = 1; i <= maxValue; i++) {
    for (let bars = 0; bars < Math.min(MAX_PRIME_FACTOR, n); bars++) {
      answer = (answer + counts[i][bars] * sieve[n - 1][bars]) % MOD;
    }
  }
  return answer;
};

console.log(idealArrays(2, 5)); // 10
