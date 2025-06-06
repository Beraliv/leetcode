/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  // Solution: Array + Stack + Greedy
  // Time: O(N)
  // Space: O(N)

  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  let minCode = 0;
  const stack = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    counts[s.charCodeAt(i) - 97]--;

    while (counts[minCode] === 0) {
      minCode++;
    }

    while (stack.length > 0 && stack.at(-1).charCodeAt(0) - 97 <= minCode) {
      result.push(stack.pop());
    }
  }

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join("");
};

console.log(robotWithString("zza")); // "aaz"
console.log(robotWithString("bac")); // "abc"
console.log(robotWithString("baca")); // "aacb"
console.log(robotWithString("bdda")); // "addb"
console.log(robotWithString("baab")); // "aabb"
