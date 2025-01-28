const A_CODE = "a".charCodeAt(0);

const getIndex = (ch) => ch.toLowerCase().charCodeAt(0) - A_CODE;

const addToCache = (cache, ch) => {
  cache[getIndex(ch)]++;
};

const hasValue = (cache, ch) => cache[getIndex(ch)] > 0;

/**
 * 19min
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const cache1 = Array(26).fill(0);
  for (const ch of word1) {
    addToCache(cache1, ch);
  }

  const cache2 = Array(26).fill(0);
  for (const ch of word2) {
    addToCache(cache2, ch);
  }

  for (let i = 0; i < 26; i++) {
    if (
      (cache1[i] > 0 && cache2[i] == 0) ||
      (cache1[i] === 0 && cache2[i] > 0)
    ) {
      return false;
    }
  }

  cache1.sort((a, b) => a - b);
  cache2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (cache1[i] !== cache2[i]) {
      return false;
    }
  }

  return true;
};
