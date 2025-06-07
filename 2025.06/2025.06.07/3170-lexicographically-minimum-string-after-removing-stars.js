/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  // Solution: Array + Stack + Greedy
  // Time: O(N)
  // Space: O(N)

  const stacks = new Array(26).fill().map(() => []);
  const answer = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      answer[i] = "";
      for (let j = 0; j < 26; j++) {
        if (stacks[j].length > 0) {
          answer[stacks[j].pop()] = "";
          break;
        }
      }
    } else {
      const code = s[i].charCodeAt(0) - 97;
      stacks[code].push(i);
    }
  }
  return answer.join("");
};

console.log(clearStars("aaba*")); // "aab"
console.log(clearStars("aaba**")); // "ab"
console.log(clearStars("d*cba")); // "cba"
console.log(clearStars("aabbcc****")); // "cc"
