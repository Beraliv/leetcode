const A_CODE = "a".charCodeAt(0);

const getCode = (ch) => ch.charCodeAt(0) - A_CODE;

const getChar = (code) => String.fromCharCode(A_CODE + code);

const getOccurrences = (strOrArr) => {
  const occurrences = Array(26).fill(0);

  for (const ch of strOrArr) {
    const code = getCode(ch);
    occurrences[code]++;
  }

  return occurrences;
};

const sortCharacters = (target) => {
  const occurrences = getOccurrences(target);

  const sortedCharacters = [];

  for (let i = 0; i < 26; i++) {
    const char = getChar(i);
    for (let j = 0; j < occurrences[i]; j++) {
      sortedCharacters.push(char);
    }
  }

  return sortedCharacters.join("");
};

const getMissing = (stickerMap, targetOccurrences) => {
  const occurrences = Array(26).fill(0);

  for (const stickerOccurrences of stickerMap.values()) {
    for (let i = 0; i < 26; i++) {
      occurrences[i] += stickerOccurrences[i];
    }
  }

  for (let i = 0; i < 26; i++) {
    if (targetOccurrences[i] > 0 && occurrences[i] === 0) {
      return true;
    }
  }

  return false;
};

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  // Solution 1. dfs without caching
  //   // 1. calculate occurrences of each character for target and each sticker in stickers
  //   const stickerMap = new Map();
  //   for (const sticker of stickers) {
  //     stickerMap.set(sticker, getOccurrences(sticker));
  //   }
  //   let targetOccurrences = getOccurrences(target);
  //   // 2. check that all characters are represented in stickers, otherwise return -1
  //   if (getMissing(stickerMap, targetOccurrences)) {
  //     return -1;
  //   }
  //   // 3. at each step pick sticker that has maximum of characters that need to be used
  //   let minStickerCount = Infinity;
  //   const dfs = (left, stickerCount) => {
  //     if (left <= 0) {
  //       minStickerCount = Math.min(minStickerCount, stickerCount);
  //       return;
  //     }
  //     for (const occurrences of stickerMap.values()) {
  //       const previousTargetOccurrences = [...targetOccurrences];
  //       let covered = 0;
  //       for (let i = 0; i < 26; i++) {
  //         const count = Math.min(occurrences[i], targetOccurrences[i]);
  //         targetOccurrences[i] -= count;
  //         covered += count;
  //       }
  //       if (covered > 0) {
  //         dfs(left - covered, stickerCount + 1);
  //       }
  //       targetOccurrences = previousTargetOccurrences;
  //     }
  //   };
  //   dfs(target.length, 0);
  //   return minStickerCount;
  //   Solution 2. DFS + caching

  // 1. calculate occurrences of each character for target and each sticker in stickers
  const stickerOccurrences = Array(stickers.length)
    .fill(0)
    .map((_, i) => getOccurrences(stickers[i]));

  const dp = new Map();
  dp.set("", 0);

  // 3. at each step pick sticker that has maximum of characters that need to be used
  const dfs = (characters) => {
    if (dp.has(characters)) {
      return dp.get(characters);
    }

    const targetOccurrences = getOccurrences(characters);

    let minCount = Infinity;

    for (const occurrences of stickerOccurrences) {
      if (occurrences[getCode(characters[0])] === 0) {
        continue;
      }

      let nextCharacters = [];

      for (let i = 0; i < 26; i++) {
        if (targetOccurrences[i] > 0) {
          const left = Math.max(targetOccurrences[i] - occurrences[i], 0);
          const ch = getChar(i);
          for (let j = 0; j < left; j++) {
            nextCharacters.push(ch);
          }
        }
      }

      const recursiveResult = dfs(nextCharacters.join(""));

      if (recursiveResult !== -1) {
        minCount = Math.min(minCount, recursiveResult + 1);
      }
    }

    const result = minCount === Infinity ? -1 : minCount;
    dp.set(characters, result);
    return result;
  };

  return dfs(sortCharacters(target));
};

// console.log(minStickers(["with", "example", "science"], "thehat"));
console.log(
  minStickers(
    [
      "slave",
      "doctor",
      "kept",
      "insect",
      "an",
      "window",
      "she",
      "range",
      "post",
      "guide",
    ],
    "supportclose"
  )
);
