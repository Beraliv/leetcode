const cachedDigits = new Array(100);

/**
 * @param {bigint} bigint
 * @param {number} kBase
 */
function isKBasePalindrome(bigint, kBase) {
  let length = 0;
  while (bigint > 0n) {
    let baseBigint = BigInt(kBase);
    cachedDigits[length++] = Number(bigint % baseBigint);
    bigint /= baseBigint;
  }

  let left = 0,
    right = length - 1;
  while (left < right) {
    if (cachedDigits[left++] !== cachedDigits[right--]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number} number
 * @param {0 | 1} type
 */
const buildSymmetricalNumber = (number, type) => {
  let left = BigInt(number);
  let right =
    type === 0
      ? /* odd length, e.g. 101 */ Math.floor(number / 10)
      : //                    ~
        /* even length, e.g. 11 */ number;
  //                          ~
  while (right > 0) {
    left = left * 10n + BigInt(right % 10);
    right = Math.floor(right / 10);
  }
  return left;
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
  // Solution: Generate + Filter
  // Time: O(10 ^ 5)
  // Space: O(1)

  let left = 1,
    count = 0,
    sum = 0n;
  while (count < n) {
    const right = left * 10;
    for (let type = 0; type < 2; ++type) {
      for (let number = left; number < right && count < n; number++) {
        const candidate = buildSymmetricalNumber(number, type);
        if (isKBasePalindrome(candidate, k)) {
          count++;
          sum += candidate;
        }
      }
    }

    left = right;
  }

  return Number(sum);
};
