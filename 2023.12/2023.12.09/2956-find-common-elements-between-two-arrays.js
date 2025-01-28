/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set();
  for (const num of nums1) {
    set1.add(num);
  }

  const set2 = new Set();
  for (const num of nums2) {
    set2.add(num);
  }

  const answer = [0, 0];

  for (const num of nums1) {
    if (set2.has(num)) {
      answer[0]++;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      answer[1]++;
    }
  }

  return answer;
};
