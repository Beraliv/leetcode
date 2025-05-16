const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const isOneHammingDistance = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diff++;
      if (diff > 1) {
        return false;
      }
    }
  }
  return diff === 1;
};

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (words, groups) {
  // Solution: 1D DP + Bubble Sort Iteration
  // Time: O(N ^ 2 * L), L = max length of word in words
  // Space: O(N)

  const n = words.length;
  // dp[i] = max(dp[i], dp[j] + 1), for different groups and hamming distance 1
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (
        groups[i] !== groups[j] &&
        isOneHammingDistance(words[i], words[j]) &&
        dp[i] < dp[j] + 1
      ) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const best = [];
  for (let i = maxIndex; i >= 0; i = prev[i]) {
    best.push(words[i]);
  }

  for (let i = 0; i * 2 < best.length; i++) {
    swap(best, i, best.length - 1 - i);
  }

  return best;
};
