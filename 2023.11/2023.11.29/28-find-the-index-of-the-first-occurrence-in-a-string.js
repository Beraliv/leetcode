const A_CODE = "a".charCodeAt(0);

const getCode = (ch) => ch.charCodeAt(0) - A_CODE;

const getHash = (str, start, end) => {
  let hash = 0;

  for (let i = start; i <= end; i++) {
    hash += getCode(str[i]);
  }

  return hash;
};

const equal = (str, start, end, target) => {
  if (end - start + 1 !== target.length) {
    return false;
  }

  for (let i = 0; i < target.length; i++) {
    if (str[start + i] !== target[i]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Solution 1. O(H * N) time, O(1) space
  // for (let i = 0; i < haystack.length; i++) {
  //     let k = 0;

  //     while (i + k < haystack.length && k < needle.length && haystack[i + k] === needle[k]) {
  //         k++;
  //     }

  //     if (k === needle.length) {
  //         return i;
  //     }
  // }

  // return -1;

  // Solution 2. O(H) time, O(1) space
  let hash = getHash(needle, 0, needle.length - 1);
  let windowHash = null;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // window is [i, i + needle.length - 1]

    if (i === 0) {
      windowHash = getHash(haystack, i, i + needle.length - 1);
    } else {
      windowHash -= getCode(haystack[i - 1]);
      windowHash += getCode(haystack[i + needle.length - 1]);
    }

    if (
      windowHash === hash &&
      equal(haystack, i, i + needle.length - 1, needle)
    ) {
      return i;
    }
  }

  return -1;
};
