var lastSubstring = function (s) {
  let bestStart = 0,
    start = 1;
  while (start < s.length) {
    let shift = 0;
    while (
      start + shift < s.length &&
      s[bestStart + shift] === s[start + shift]
    ) {
      shift++;
    }
    if (start + shift < s.length && s[bestStart + shift] < s[start + shift]) {
      let temp = bestStart;
      bestStart = start;
      start = Math.max(start + 1, temp + shift + 1);
    } else {
      start = start + shift + 1;
    }
  }
  return s.substring(bestStart);
};

var answerString = function (word, numFriends) {
  // Solution: 2 Pointers
  // Time: O(N)
  // Space: O(1)

  if (numFriends === 1) {
    return word;
  }
  let last = lastSubstring(word);
  return last.substring(0, Math.min(last.length, word.length - numFriends + 1));
};

// console.log(answerString("dbca", 2)); // "dbc"
// console.log(answerString("gggg", 4)); // "g"
console.log(answerString("bif", 2)); // "if"
// console.log(answerString("dah", 3)); // "h"
// console.log(answerString("aamn", 2)); // "m"
