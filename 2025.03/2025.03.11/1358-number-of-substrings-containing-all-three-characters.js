/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  const abc = new Map();

  const add = (ch) => {
    abc.set(ch, (abc.get(ch) || 0) + 1);
  };

  const remove = (ch) => {
    if (abc.get(ch) === 1) {
      abc.delete(ch);
    } else {
      abc.set(ch, abc.get(ch) - 1);
    }
  };

  let count = 0,
    start = 0,
    end = 0;

  while (end < s.length) {
    add(s[end]);

    while (abc.size === 3) {
      count += s.length - end;
      remove(s[start]);
      start++;
    }

    end++;
  }

  while (start < s.length) {
    if (abc.size === 3) {
      count += 1;
      remove(s[start]);
      start++;
    } else {
      break;
    }
  }

  return count;
};

console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
console.log(numberOfSubstrings("acbbcac")); // 11
// 5 + 2 + 2 + 2
