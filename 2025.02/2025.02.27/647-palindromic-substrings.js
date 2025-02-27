/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // Solution: Expand from possible centres
  // Time: O(N ^ 2)
  // Space: O(1)

  let count = 0;

  const expand = (i, j) => {
    let count = 0;
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      count++;
      i--;
      j++;
    }
    return count;
  };

  for (let i = 0; i < s.length; i++) {
    count += expand(i, i);
    count += expand(i, i + 1);
  }

  return count;
};

console.log(countSubstrings("abaa")); // 6, a,b,a,a,aba,aa
