const MOD = BigInt(1000000007);
const MAX_N = 100001;

const quickPow = (base, power) => {
  let result = 1n;
  while (power > 0) {
    if (power & 1n) {
      result = (result * base) % MOD;
    }
    base = (base * base) % MOD;
    power >>= 1n;
  }
  return result;
};

let factorials;
let inversedFactorials;

const precalculateFactorials = () => {
  if (factorials) {
    return;
  }

  factorials = Array(MAX_N).fill(1n);
  for (let i = 1; i < MAX_N; i++) {
    factorials[i] = (factorials[i - 1] * BigInt(i)) % MOD;
  }

  inversedFactorials = Array(MAX_N).fill(1n);
  inversedFactorials[MAX_N - 1] = quickPow(factorials[MAX_N - 1], MOD - 2n);
  for (let i = MAX_N - 2; i >= 0; i--) {
    inversedFactorials[i] = (inversedFactorials[i + 1] * BigInt(i + 1)) % MOD;
  }
};

const combinations = (n, m) => {
  if (m < 0 || m > n) {
    return 0n;
  }

  let result = factorials[n];
  result = (result * inversedFactorials[m]) % MOD;
  result = (result * inversedFactorials[n - m]) % MOD;
  return result;
};

var countGoodArrays = function (n, m, k) {
  // Solution: Combinatorics
  // Time: O(log(N - K))
  // Space: O(N)

  precalculateFactorials();

  let result = combinations(n - 1, k);
  result = (result * BigInt(m)) % MOD;
  result = (result * quickPow(BigInt(m - 1), BigInt(n - 1 - k))) % MOD;
  return Number(result);
};
