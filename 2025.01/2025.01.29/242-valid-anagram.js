// easy
// time is 5m40s
// best conceivable runtime is O(N), where N is both S and T length
// best conceivable space is O(1) (O(N))
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const ch = t[i];

    const count = (map.get(ch) || 0) - 1;
    if (count < 0) {
      return false;
    }

    map.set(ch, count);
  }

  return true;
};

// console.log(isAnagram("doctor", "doc"));
console.log(isAnagram("rat", "tar"));
