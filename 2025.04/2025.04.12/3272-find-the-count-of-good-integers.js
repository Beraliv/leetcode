/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
  // Solution 1: Enumeration + Permutations + Combinatorics
  // Time: O(N * logN + 10 ^ (N / 2))
  // Space: O(N + 10 ^ (N / 2))

  const palindromeSet = new Set();
  // iterate a half from 10 ^ ((n - 1) / 2) to 10 ^ ((n - 1) / 2 + 1)
  const low = Math.pow(10, Math.floor((n - 1) / 2));
  const skip = n & 1;
  for (let i = low; i < low * 10; i++) {
    let str = i.toString();
    str += str.split("").reverse().slice(skip).join("");
    if (str % k === 0) {
      palindromeSet.add(str.split("").sort().join(""));
    }
  }

  const factorial = Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  let count = 0;
  for (const str of palindromeSet) {
    const digits = Array(10).fill(0);
    for (const char of str) {
      digits[Number(char)]++;
    }
    // (n - 1)! * (n - d0) / (d0! * d1! * d2! * ... * d9!)
    let combinations = factorial[n - 1] * (n - digits[0]);
    for (let i = 0; i < digits.length; i++) {
      combinations /= factorial[digits[i]];
    }
    count += combinations;
  }

  return count;
};

// console.log(countGoodIntegers(1, 1)); // 9
// console.log(countGoodIntegers(1, 2)); // 4
// console.log(countGoodIntegers(1, 3)); // 3
// console.log(countGoodIntegers(1, 4)); // 2
// console.log(countGoodIntegers(1, 5)); // 1
// console.log(countGoodIntegers(2, 2)); // 4
// console.log(countGoodIntegers(3, 5)); // 27
// console.log(countGoodIntegers(5, 6)); // 2468
// console.log(countGoodIntegers(8, 2)); // 563392
