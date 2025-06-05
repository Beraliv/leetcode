const A_CODE = "a".charCodeAt(0);

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  // Solution: Array + Hash Map (Reversed, but optimal value) + Iteration
  // Time: O(S + B)
  // Space: O(1)

  let groupId = 1;
  const groups = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const a = s1.charCodeAt(i) - A_CODE;
    const b = s2.charCodeAt(i) - A_CODE;
    if (groups[a] === 0 && groups[b] === 0) {
      groups[a] = groupId;
      groups[b] = groupId++;
    } else if (groups[a] === 0) {
      groups[a] = groups[b];
    } else if (groups[b] === 0) {
      groups[b] = groups[a];
    } else if (groups[a] !== groups[b]) {
      const oldGroupId = groups[b];
      for (let j = 0; j < 26; j++) {
        if (groups[j] === oldGroupId) {
          groups[j] = groups[a];
        }
      }
    }
  }

  const minGroupMap = {};
  for (let i = 0; i < 26; i++) {
    if (groups[i] !== 0) {
      if (typeof minGroupMap[groups[i]] !== "number") {
        minGroupMap[groups[i]] = i;
      } else {
        minGroupMap[groups[i]] = Math.min(minGroupMap[groups[i]], i);
      }
    }
  }

  const transformed = [];
  for (let i = 0; i < baseStr.length; i++) {
    const code = baseStr.charCodeAt(i) - A_CODE;
    if (groups[code] !== 0) {
      transformed.push(String.fromCharCode(minGroupMap[groups[code]] + A_CODE));
    } else {
      transformed.push(baseStr[i]);
    }
  }

  return transformed.join("");
};

console.log(smallestEquivalentString("parker", "morris", "parser")); // "makkek"
console.log(smallestEquivalentString("hello", "world", "hold")); // "hdld"
