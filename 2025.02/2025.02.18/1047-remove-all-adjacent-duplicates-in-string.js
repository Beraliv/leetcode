/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // Solution: Stack + Remove when meeting duplicates
  // Time: O(N)
  // Space: O(N)

  const answer = [];

  for (const ch of s) {
    if (answer.length > 0 && answer.at(-1) === ch) {
      answer.pop();
    } else {
      answer.push(ch);
    }
  }

  return answer.join("");
};

console.log(removeDuplicates("abbaca")); // ca
