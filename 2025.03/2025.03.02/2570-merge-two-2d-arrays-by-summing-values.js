/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  // Solution: 2 Pointers
  // Time: O(N + M)
  // Space: O(1)

  let i = 0,
    j = 0;
  const answer = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] === nums2[j][0]) {
      answer.push([nums1[i][0], nums1[i++][1] + nums2[j++][1]]);
    } else if (nums1[i][0] < nums2[j][0]) {
      answer.push(nums1[i++]);
    } else {
      answer.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    answer.push(nums1[i++]);
  }

  while (j < nums2.length) {
    answer.push(nums2[j++]);
  }

  return answer;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
