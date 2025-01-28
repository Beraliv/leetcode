/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;

  for (const num of nums) {
    const rest = k - num;

    if (!map.has(rest)) {
      map.set(num, (map.get(num) || 0) + 1);
      continue;
    }

    const restCount = map.get(rest) - 1;

    if (restCount === 0) {
      map.delete(rest);
    } else {
      map.set(rest, restCount);
    }

    count++;
  }

  return count;
};
