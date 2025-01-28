/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  const cache = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(0));

  const minimumRemovedForValidPalindrome = (i, j) => {
    if (cache[i][j]) {
      return cache[i][j];
    }

    if (i >= j) {
      return 0;
    }

    let value = Infinity;

    if (s[i] === s[j]) {
      value = minimumRemovedForValidPalindrome(i + 1, j - 1);
    } else {
      value =
        1 +
        Math.min(
          minimumRemovedForValidPalindrome(i + 1, j),
          minimumRemovedForValidPalindrome(i, j - 1)
        );
    }

    cache[i][j] = value;

    return value;
  };

  return minimumRemovedForValidPalindrome(0, s.length - 1) <= k;
};

// s = bacbaaa, k = 2

// i = 0, j = 6, left = 2
// i = 1, j = 6, left = 1
// i = 2, j = 5, left = 1

// i = 0, j = 5, left = 1
