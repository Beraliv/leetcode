/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Map();
  for (const ch of t) {
    const count = map.get(ch) || 0;
    map.set(ch, count + 1);
  }

  let required = map.size;

  let left = 0,
    right = 0;

  let formed = 0;
  let windowCounts = new Map();

  let answer = [-1, 0, 0];

  while (right < s.length) {
    const ch = s[right];
    let count = (windowCounts.get(ch) || 0) + 1;
    windowCounts.set(ch, count);

    if (map.has(ch) && map.get(ch) === count) {
      formed++;
    }

    while (left <= right && formed === required) {
      const ch = s[left];

      if (answer[0] === -1 || right - left + 1 < answer[0]) {
        answer = [right - left + 1, left, right];
      }

      const count = windowCounts.get(ch) - 1;
      windowCounts.set(ch, count);
      if (map.has(ch) && count < map.get(ch)) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return answer[0] === -1 ? "" : s.slice(answer[1], answer[2] + 1);
};

// ADOBECODEBANC
// ______
//    ________
//      ______
//          ____
