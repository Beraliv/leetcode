/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // Solution: Last Character Index Array + 2 Pointers
  // Time: O(N)
  // Space: O(1)

  let lastIndex = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i) - 97;
    lastIndex[pos] = i;
  }

  const answer = [];
  let start = 0,
    end = 0;
  while (start < s.length) {
    end = lastIndex[s.charCodeAt(start) - 97];
    for (let i = start; i <= end; i++) {
      end = Math.max(end, lastIndex[s.charCodeAt(i) - 97]);
    }
    answer.push(end - start + 1);
    start = end + 1;
  }

  return answer;
};

console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // [10]
