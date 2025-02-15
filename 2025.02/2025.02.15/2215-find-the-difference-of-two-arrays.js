/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // Solution: 2 HashSets + 1 Iteration
  // Time: O(N1 + N2)
  // Space: O(N1 + N2)

  // a list of all distinct integers in nums1 which are not present in nums2.
  const set1 = new Set(nums1);
  // a list of all distinct integers in nums2 which are not present in nums1.
  const set2 = new Set(nums2);

  for (const num2 of nums2) {
    if (set1.has(num2)) {
      set1.delete(num2);
      set2.delete(num2);
    }
  }

  return [Array.from(set1), Array.from(set2)];
};
