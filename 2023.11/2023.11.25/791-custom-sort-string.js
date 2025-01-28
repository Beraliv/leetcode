const A_CODE = "a".charCodeAt(0);

const getCode = (ch) => ch.charCodeAt(0) - A_CODE;

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  // Solution 1. O(O + S * logS)
  // const map = new Map();

  // for (let i = 0; i < order.length; i++) {
  //     map.set(order[i], i);
  // }

  // for (let i = 0; i < s.length; i++) {
  //     if (!map.has(s[i])) {
  //         map.set(s[i], order.length);
  //     }
  // }

  // return [...s].sort((a, b) => map.get(a) - map.get(b)).join('');
  // Solution 2. O(O + S) time, O(N) space
  const count = Array(26).fill(0);

  for (const ch of s) {
    const code = getCode(ch);
    count[code]++;
  }

  const characters = [];

  for (const ch of order) {
    const code = getCode(ch);

    if (count[code] > 0) {
      for (let i = 0; i < count[code]; i++) {
        characters.push(ch);
      }

      count[code] = 0;
    }
  }

  for (let index = 0; index < 26; index++) {
    const ch = String.fromCharCode(A_CODE + index);

    for (let i = 0; i < count[index]; i++) {
      characters.push(ch);
    }
  }

  return characters.join("");
};
