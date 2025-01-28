/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (source, target) {
  const sourceMap = new Map();
  for (const ch of source) {
    sourceMap.set(ch, (sourceMap.get(ch) || 0) + 1);
  }

  const targetMap = new Map();
  for (const ch of target) {
    targetMap.set(ch, (targetMap.get(ch) || 0) + 1);
  }

  let min = Infinity;
  for (const ch of target) {
    if (!sourceMap.has(ch)) {
      return 0;
    }

    min = Math.min(min, Math.floor(sourceMap.get(ch) / targetMap.get(ch)));
  }
  return min;
};
