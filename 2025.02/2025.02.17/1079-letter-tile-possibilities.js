/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  // Solution: HashMap + Backtracking
  // Time: O(2 ^ N)
  // Space: O(N)
  let count = 0;

  const countMap = {};
  for (const ch of tiles) {
    if (!countMap[ch]) {
      countMap[ch] = 0;
    }
    countMap[ch]++;
  }

  const backtrack = () => {
    count++;

    const keys = Object.keys(countMap);
    for (const key of keys) {
      if (countMap[key] > 0) {
        countMap[key]--;
        backtrack();
        countMap[key]++;
      }
    }
  };

  backtrack();

  return count - 1;
};

console.log(numTilePossibilities("AAB"));
