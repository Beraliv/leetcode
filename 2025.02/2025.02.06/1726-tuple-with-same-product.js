/**
 * 30min
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  // Solution: Product for every pair + HashMap, then calculate pairs N * (N -
  // 1) / 2 and multiplied by 8 combinations
  // Time: O(N ^ 2)
  // Space: O(N ^ 2) worst, or O(P) where P is a number of unique products

  const n = nums.length;
  const frequencyMap = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let product = nums[i] * nums[j];
      frequencyMap.set(product, (frequencyMap.get(product) || 0) + 1);
    }
  }

  let count = 0;
  for (const freq of frequencyMap.values()) {
    const pairs = (freq * (freq - 1)) / 2;
    count += 8 * pairs;
  }

  return count;
};

console.log(tupleSameProduct([2, 3, 4, 6]));
// (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
// (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
