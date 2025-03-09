/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  if (blocks.length < k) {
    return -1;
  }

  let minCount = Infinity,
    count = 0,
    i = 0;

  while (i < k) {
    count += blocks[i] === "W" ? 1 : 0;
    i++;
  }

  if (i === blocks.length) {
    return count;
  }

  do {
    minCount = Math.min(minCount, count);
    count += blocks[i] === "W" ? 1 : 0;
    count -= blocks[i - k] === "W" ? 1 : 0;
    i++;
  } while (i < blocks.length);

  return Math.min(minCount, count);
};

console.log(minimumRecolors("W", 1)); // 1
console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("WBWBBBW", 2)); // 0
console.log(minimumRecolors("WWBBBWBBBBBWWBWWWB", 16)); // 6
