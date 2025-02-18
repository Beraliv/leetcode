import { Queue } from "@datastructures-js/queue";

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // Solution 1: Backtrack + HashSet (Word Dictionary)
  // Time: O(2 ^ N)
  // Space: O(N)
  // Time Limit Exceeds
  //   const dictionary = new Set();
  //   let maxLength = 0;
  //   for (const word of wordDict) {
  //     maxLength = Math.max(maxLength, word.length);
  //     dictionary.add(word);
  //   }
  //   const backtrack = (start, end) => {
  //     const str = s.substring(start, end);
  //     if (end === s.length) {
  //       return dictionary.has(str);
  //     }
  //     if (end - start > maxLength) {
  //       return false;
  //     }
  //     if (dictionary.has(str)) {
  //       let answer = backtrack(end, end + 1);
  //       if (answer) {
  //         return answer;
  //       }
  //     }
  //     return backtrack(start, end + 1);
  //   };
  //   return backtrack(0, 0);

  // Solution 2: BFS + Queue + 2 HashSet (Dict + Visited)
  // Time: O(N ^ 3 + D * K), where N is length of `s`, D is length of `wordDict`, K is average length of words in `wordDict`, O(N ^ 3) is BFS and O(D * K) is dictionary HashSet
  // Space: O(N + D * K)

  const dictionary = new Set(wordDict);
  const visited = new Set();
  const queue = new Queue();
  queue.enqueue(0);

  while (!queue.isEmpty()) {
    const start = queue.dequeue();
    if (start === s.length) {
      return true;
    }
    // === s.length, since end is required for s.substring
    for (let end = start + 1; end <= s.length; end++) {
      if (visited.has(end)) continue;
      if (!dictionary.has(s.substring(start, end))) continue;
      queue.enqueue(end);
      visited.add(end);
    }
  }
  return false;

  // TODO: Solution 3: DP
};

// console.log(wordBreak("leetcode", ["leet", "code"])); // true
// console.log(wordBreak("catsandog", ["cat", "cats", "and", "sand", "dog"])); // false
console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ]
  )
); // true
