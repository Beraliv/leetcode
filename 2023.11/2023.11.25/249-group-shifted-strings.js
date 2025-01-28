const ALPHABET_COUNT = 26;

const getHash = (string) => {
  let hash = [];
  for (let i = 1; i < string.length; i++) {
    const diff =
      (string[i].charCodeAt(0) - string[i - 1].charCodeAt(0) + ALPHABET_COUNT) %
      ALPHABET_COUNT;
    hash.push(diff);
  }
  return hash.join(".");
};

// abc => 11.3
// number = 11.3
// i = 2
// diff = 1
// bcd => 11
// yza => 11

// 1 + 1 and 11 are different, so putting separator

/**
 * 15min
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  // 1. calculate hash for each string
  const map = new Map();
  for (const string of strings) {
    const hash = getHash(string);
    const array = map.get(hash) || [];
    array.push(string);
    map.set(hash, array);
  }
  // 2. return result
  return [...map.values()];
};
