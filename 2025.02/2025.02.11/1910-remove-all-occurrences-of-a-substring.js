// TODO 1: what is faster, str.charAt(i) or str[i]

/**
 *
 * @param {string} str
 */
const longestPrefix = (str) => {
  const table = new Array(str.length);
  table[0] = 0;

  let maxPrefix = 0;

  for (let i = 1; i < str.length; i++) {
    // 1. character doesn't match the last character of the longest prefix
    while (maxPrefix > 0 && str[i] !== str[maxPrefix]) {
      maxPrefix = table[maxPrefix - 1];
    }
    // 2. Character matches the last characters of the longest prefix
    if (str[i] === str[maxPrefix]) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
};

// console.log(longestPrefix("ab")); // [0,0]
// console.log(longestPrefix("aba")); // [0,0,1]
// console.log(longestPrefix("abab")); // [0,0,1,2]

/**
 * @param {string} str
 * @param {string} pattern
 * @return {string}
 */
var removeOccurrences = function (str, pattern) {
  // Solution 1: KMP
  // Time: O(M + N)
  // Space: O(M + N)

  const prefixes = longestPrefix(pattern);
  const stack = [];
  const patternIndices = new Array(str.length + 1);

  for (let i = 0, j = 0; i < str.length; i++) {
    stack.push(str[i]);

    if (str[i] === pattern[j]) {
      patternIndices[stack.length] = ++j;

      if (j === pattern.length) {
        // stack.pop N times
        // stack.length -= pattern.length;
        for (let i = 0; i < pattern.length; i++) {
          stack.pop();
        }

        j = stack.length === 0 ? 0 : patternIndices[stack.length];
      }
    } else {
      if (j !== 0) {
        i--;
        j = prefixes[j - 1];
        stack.pop();
      } else {
        patternIndices[stack.length] = 0;
      }
    }
  }

  return stack.join("");

  // Solution 2: indexOf + substring
  // Supposedly, time: O(N * M)
  // Space: O(1) ??? (possibly )
  //   let index = str.indexOf(pattern);
  //   const length = pattern.length;

  //   while (index !== -1) {
  //     str = str.substring(0, index) + str.substring(index + length);
  //     index = str.indexOf(pattern);
  //   }

  //   return str;
};

console.log(removeOccurrences("daabcbaabcbc", "abc")); // dab
console.log(removeOccurrences("axxxxyyyyb", "xy")); // ab
