const MOD = 1000000007n;

const power = (base, exponent) => {
  let result = 1n;

  while (exponent > 0) {
    if (exponent % 2n === 1n) {
      result = (result * base) % MOD;
      exponent--;
    }
    base = (base * base) % MOD;
    exponent /= 2n;
  }

  return result;
};

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  // Solution: Quick Exponentiation
  // Time: O(logN)
  // Space: O(1)

  if (n === 0) return 0;

  // even indices - 02468
  // odd indices - 2357

  if (n % 2 === 0) {
    // 20 ^ (n / 2)
    return Number(power(20n, BigInt(n) / 2n) % MOD);
  }

  // 5 * 20 ^ ((n - 1) / 2)
  return Number((5n * power(20n, BigInt(n - 1) / 2n)) % MOD);
};

console.log(countGoodNumbers(1)); // 5
console.log(countGoodNumbers(4)); // 400
console.log(countGoodNumbers(50)); // 400
console.log(countGoodNumbers(806166225460393)); //
