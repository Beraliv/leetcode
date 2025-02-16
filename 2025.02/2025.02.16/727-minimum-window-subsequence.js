/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function (s1, s2) {
  // Solution 1: Greedy (HashMap + 2 pointers)
  // Time: O(N * M)
  // Space: O(N)

  let minString;
  const indexMap = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (!indexMap.has(s1[i])) {
      indexMap.set(s1[i], []);
    }
    indexMap.get(s1[i]).push(i);
  }

  for (let start = 0; start < s1.length; start++) {
    let end = start;
    for (let j = 0; j < s2.length; j++) {
      if (!indexMap.has(s2[j])) {
        return "";
      }
      const indices = indexMap.get(s2[j]);
      let k = 0;
      while (k < indices.length && indices[k] < end) {
        k++;
      }
      if (k === indices.length) {
        return minString ? minString : "";
      }
      end = indices[k] + 1;
    }
    if (!minString || end - start < minString.length) {
      minString = s1.substring(start, end);
    }
  }

  return minString ? minString : "";

  // TODO: Solution 2: Optimised Space DP (i.e. O(M))
};

console.log(minWindow("abcdebdde", "bde")); // bcde
console.log(minWindow("bdde", "bd")); // bd
console.log(minWindow("bdbde", "bde")); // bde
console.log(minWindow("bbbd", "bd")); // bd
console.log(minWindow("bdede", "bde")); // bde
console.log(minWindow("wcbsuiyzacfgrqsqsnodwmxzkz", "xwqe")); // ''
console.log(
  minWindow(
    "ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl",
    "ntimcimzah"
  )
); // nevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaph
