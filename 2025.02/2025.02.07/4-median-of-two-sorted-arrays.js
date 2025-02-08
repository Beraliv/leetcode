// const last = (nums) => nums[nums.length - 1];

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
// Solution 1. Divide and conquer
//   let len1 = nums1.length;
//   let len2 = nums2.length;
//   let n = len1 + len2;

//   if (n % 2 === 1) {
//     return findMin({
//       as: nums1,
//       bs: nums2,
//       k: (n - 1) / 2,
//       aStart: 0,
//       aEnd: len1 - 1,
//       bStart: 0,
//       bEnd: len2 - 1,
//     });
//   }

//   return (
//     (findMin({
//       as: nums1,
//       bs: nums2,
//       k: n / 2,
//       aStart: 0,
//       aEnd: len1 - 1,
//       bStart: 0,
//       bEnd: len2 - 1,
//     }) +
//       findMin({
//         as: nums1,
//         bs: nums2,
//         k: n / 2 - 1,
//         aStart: 0,
//         aEnd: len1 - 1,
//         bStart: 0,
//         bEnd: len2 - 1,
//       })) /
//     2
//   );
// };

// // k = 1, aStart = 0, aEnd = 1, bStart = 0, bEnd = 0
// // aIndex = 0, bIndex = 0, aValue = 1, bValue = 2
// // k = 1, aStart = 1, aEnd = 1, bStart = 0, bEnd = 0
// // aIndex = 1, bIndex = 0, aValue = 3, bValue = 2
// // k = 1, aStart = 1, aEnd = 0, bStart = 0, bEnd = 0

// const findMin = ({ as, bs, k, aStart, aEnd, bStart, bEnd }) => {
//   if (aStart > aEnd) {
//     return bs[k - aStart];
//   }

//   if (bStart > bEnd) {
//     return as[k - bStart];
//   }

//   const aIndex = (aStart + aEnd) >> 1;
//   const bIndex = (bStart + bEnd) >> 1;
//   const aValue = as[aIndex];
//   const bValue = bs[bIndex];

//   if (aIndex + bIndex < k) {
//     return aValue < bValue
//       ? findMin({ as, bs, k, aStart: aIndex + 1, aEnd, bStart, bEnd })
//       : findMin({ as, bs, k, aStart, aEnd, bStart: bIndex + 1, bEnd });
//   }

//   return aValue < bValue
//     ? findMin({ as, bs, k, aStart, aEnd, bStart, bEnd: bIndex - 1 })
//     : findMin({ as, bs, k, aStart, aEnd: aIndex - 1, bStart, bEnd });
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Solution 2: Binary search
  // Time: O(log min(A, B))
  // Space: O(1)

  let A = nums1;
  let B = nums2;

  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  const n = A.length + B.length;
  const half = n >> 1;

  let start = 0,
    end = A.length - 1;

  while (true) {
    const i = (start + end) >> 1;
    const j = half - i - 2;

    const leftA = i >= 0 ? A[i] : -Infinity;
    const rightA = i + 1 < A.length ? A[i + 1] : Infinity;
    const leftB = j >= 0 ? B[j] : -Infinity;
    const rightB = j + 1 < B.length ? B[j + 1] : Infinity;

    if (leftA <= rightB && leftB <= rightA) {
      if (n % 2 === 1) {
        return Math.min(rightA, rightB);
      }

      return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
    } else if (leftA > rightB) {
      end = i - 1;
    } else {
      // leftB > rightA
      start = i + 1;
    }
  }
};

// [1, 2, 3, 4]
//  ----
// [1, 2, 3, 4, 5, 6, 7, 8]
//  ----------
// n = 12, half = 6
// start1 = 0, end1 = 3
// middle1 = 1, middle2 = 3
