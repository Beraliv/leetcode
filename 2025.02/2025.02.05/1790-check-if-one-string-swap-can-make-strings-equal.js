/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  // Time: O(N)
  // Space: O(1)

  if (s1.length !== s2.length) {
    return false;
  }

  // Adv. 1. If using arrays, don't put more than 2 elements, since answer is
  // false anyway
  // Adv. 2. Avoid arrays to improve space usage (not complexity though)

  //   Solution 1. Array with early returns
  const mismatches = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatches.push(i);
      if (mismatches.length > 2) {
        return false;
      }

      if (mismatches.length === 2) {
        let j = mismatches[0];
        if (s1[i] === s2[j] && s1[j] === s2[i]) {
        } else {
          return false;
        }
      }
    }
  }

  //   Solution 2. Avoid arrays
  //   let j;
  //   for (let i = 0; i < s1.length; i++) {
  //     if (s1[i] !== s2[i]) {
  //       if (j === -1) {
  //         return false;
  //       } else if (j !== undefined) {
  //         if (s1[i] === s2[j] && s1[j] === s2[i]) {
  //           j = -1;
  //         } else {
  //           return false;
  //         }
  //       } else {
  //         j = i;
  //       }
  //     }
  //   }

  // undefined or -1
  return mismatches.length !== 1;
};
