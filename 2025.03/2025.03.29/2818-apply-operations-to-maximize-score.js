const getPrimeFactor = (n) => {
  let factor = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factor++;
      while (n % i === 0) {
        n /= i;
      }
    }
  }
  if (n > 1) {
    factor++;
  }
  return factor;
};

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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  // Solution: Sort + Stack (Prefix/Suffix) + BigInt Math
  // Time: O(N * logN)
  // Space: O(N)

  const factors = nums.map((num) => getPrimeFactor(num));

  const sortedNums = nums
    .map((num, index) => [num, index])
    .sort((a, b) => b[0] - a[0]);

  let n = nums.length;
  const prev = new Array(n).fill(-1);
  const next = new Array(n).fill(nums.length);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && factors[i] > factors[stack.at(-1)]) {
      const top = stack.pop();
      next[top] = i;
    }
    if (stack.length) {
      prev[i] = stack.at(-1);
    }
    stack.push(i);
  }

  let gain = BigInt(1);
  for (let i = 0; i < sortedNums.length && k > 0; i++) {
    let value = sortedNums[i][0];
    let index = sortedNums[i][1];

    const options = Math.min((next[index] - index) * (index - prev[index]), k);
    gain = (gain * power(BigInt(value), BigInt(options))) % MOD;
    k -= options;
  }

  return Number(gain);
};

// console.log(maximumScore([8, 3, 9, 3, 8], 2)); // 81
// n - i options to achieve

// console.log(maximumScore([19, 12, 14, 6, 10, 18], 3)); // 4788
// console.log(maximumScore([3289, 2832, 14858, 22011], 6)); // 256720975
console.log(maximumScore([2, 1, 14, 5, 18, 1, 8, 5], 34)); // 799392504

// prev[i], i, next[i]
// i - prev[i] + next[i] - i - 1 = next[i] - prev[i] - 1

// console.log(
//   modProd([
//     power(18, 8),
//     power(14, 18),
//     power(8, 4),
//     power(5, 1),
//     power(5, 1),
//     power(2, 2),
//   ])
// ); // 8
