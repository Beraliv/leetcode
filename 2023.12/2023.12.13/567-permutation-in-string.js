const A_CODE = "a".charCodeAt(0);

const getIndex = (ch) => ch.charCodeAt(0) - A_CODE;

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const freqs1 = Array(26).fill(0);
  const freqs2 = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    freqs1[getIndex(s1[i])]++;
    freqs2[getIndex(s2[i])]++;
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (freqs1[i] === freqs2[i]) {
      count++;
    }
  }

  for (let start = 0; start < s2.length - s1.length; start++) {
    if (count === 26) {
      return true;
    }

    const right = getIndex(s2[start + s1.length]);
    freqs2[right]++;
    if (freqs1[right] === freqs2[right]) {
      count++;
    } else if (freqs1[right] + 1 === freqs2[right]) {
      count--;
    }

    const left = getIndex(s2[start]);
    freqs2[left]--;
    if (freqs1[left] === freqs2[left]) {
      count++;
    } else if (freqs1[left] - 1 === freqs2[left]) {
      count--;
    }
  }

  return count === 26;
};
