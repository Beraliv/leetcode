const pairs = (count) => (count * (count - 1)) / 2;

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const n = nums.length;
  // j - i === nums[j] - nums[i]
  // nums[i] - i === nums[j] - j;

  const diffMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - i;
    if (!diffMap.has(diff)) {
      diffMap.set(diff, { count: 0 });
    }
    diffMap.get(diff).count++;
  }

  let goodCount = 0;
  for (const { count } of diffMap.values()) {
    goodCount += pairs(count);
  }

  return pairs(n) - goodCount;
};
