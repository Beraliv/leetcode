const getCode = (ch: string) => ch.charCodeAt(0);

const getHash = (s: string): number => {
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    // hash = 128 * hash + getCode(s[i]);
    hash = hash + getCode(s[i]);
  }

  return hash;
};

// 97, 98
// ab, bab

const search = (str: string, substr: string): boolean => {
  // 195
  const substrHash = getHash(substr);

  // 1
  let i = substr.length - 1;
  // ba
  let slidingWindow = str.substring(0, substr.length);

  while (i < str.length) {
    // 1. 195 === 195
    // 2. 195 === 195
    if (getHash(slidingWindow) === substrHash) {
      console.log(`hash is identical for sliding window='${slidingWindow}'`);
      // 1. ab !== ba
      // 2. ab === ab
      if (slidingWindow === substr) {
        console.log(
          `substring is identical for sliding window='${slidingWindow}'`
        );
        return true;
      }
    }

    // i = 2
    i++;
    // ab
    slidingWindow = slidingWindow.slice(1) + str[i];
  }

  return false;
};

console.log(search("bcbabc", "abc"));
console.log(search("bab", "ab"));
