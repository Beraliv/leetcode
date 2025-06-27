import { Queue } from "@datastructures-js/queue";

const isRepeatedK = (candidate, s, k) => {
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === candidate[j]) {
      j++;
      if (j === candidate.length) {
        k--;
        j = 0;
        if (k === 0) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function (s, k) {
  // Solution: ZA Sort + BFS + Queue
  // Time: O(n * (n / k)!)
  // Space: O((n / k)!)

  const counts = Array(26).fill(0);

  for (const ch of s) {
    const code = ch.charCodeAt(0) - "a".charCodeAt(0);
    counts[code]++;
  }

  const candidates = [];
  for (let i = 25; i >= 0; i--) {
    if (counts[i] >= k) {
      candidates.push(String.fromCharCode(i + "a".charCodeAt(0)));
    }
  }

  let longestCandidate = "";
  const queue = new Queue([...candidates]);

  while (!queue.isEmpty()) {
    const candidate = queue.dequeue();
    if (candidate.length > longestCandidate.length) {
      longestCandidate = candidate;
    }

    for (const ch of candidates) {
      const newCandidate = candidate + ch;
      if (newCandidate.length <= s.length && isRepeatedK(newCandidate, s, k)) {
        queue.enqueue(newCandidate);
      }
    }
  }

  return longestCandidate;
};

console.log(longestSubsequenceRepeatedK("letsleetcode", 2)); // "let"
console.log(longestSubsequenceRepeatedK("bb", 2)); // "b"
console.log(longestSubsequenceRepeatedK("ab", 2)); // ""
console.log(longestSubsequenceRepeatedK("bbabbabbbbabaababab", 3)); // "bbbb"
