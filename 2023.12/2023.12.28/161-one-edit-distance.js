/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (s === t) {
    return false;
  }

  const sLen = s.length;
  const tLen = t.length;

  if (Math.abs(sLen - tLen) > 1) {
    return false;
  }

  let diff = 0;
  let i = 0;
  let j = 0;

  while (i < sLen && j < tLen) {
    if (s[i] === t[j]) {
      i++;
      j++;
      continue;
    }

    if (diff) {
      return false;
    }

    diff++;

    if (sLen > tLen) {
      i++;
    } else if (tLen > sLen) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  return diff + sLen - i + tLen - j === 1;
};
