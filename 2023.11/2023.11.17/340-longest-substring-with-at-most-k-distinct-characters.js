/**
 * 40m
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  // Solution 1. What I could come up with
  //   if (k === 0) {
  //     return 0;
  //   }
  //   const map = new Map();
  //   // 1. first k distinct characters
  //   let start = 0;
  //   let end = 0;
  //   let distinct = k;
  //   let maxLen = -Infinity;
  //   // 2. shift one from left and look at the right
  //   while (end < s.length) {
  //     if (start < end) {
  //       const prev = s[start];
  //       const withoutPrev = map.get(prev) - 1;
  //       if (withoutPrev === 0) {
  //         map.delete(prev);
  //         distinct++;
  //       } else {
  //         map.set(prev, withoutPrev);
  //       }
  //       start++;
  //     }
  //     while (end < s.length) {
  //       // same character
  //       if (map.has(s[end])) {
  //         map.set(s[end], map.get(s[end]) + 1);
  //       } else {
  //         if (distinct === 0) {
  //           break;
  //         }
  //         map.set(s[end], 1);
  //         distinct--;
  //       }
  //       end++;
  //     }
  //     // 3. compare local len with max len and update if necessary
  //     maxLen = Math.max(maxLen, end - start);
  //   }
  //   return maxLen;

  const n = s.length;
  let maxSize = 0;
  const counter = new Map();

  for (let right = 0; right < n; right++) {
    counter.set(s[right], (counter.get(s[right]) || 0) + 1);

    if (counter.size <= k) {
      maxSize++;
    } else {
      const withoutStart = counter.get(s[right - maxSize]) - 1;
      if (withoutStart === 0) {
        counter.delete(s[right - maxSize]);
      } else {
        counter.set(s[right - maxSize], withoutStart);
      }
    }
  }

  return maxSize;
};

// abacac, s.length = 6
// map = {a: 2, c: 2}, start = 2, end = 6, distinct = 0, maxLen = 4
// c
// prev = b, withouPrev = 0

// abacdcbacdac
// start = 0, end = 3, distinct = 0, map = {a: 2, b: 1}
// aba

// abacdcbacdac, k = 3
// abac
// bac
// acdc
// cdcb
// dcb
// cbac
// bac
// acdac = 5
