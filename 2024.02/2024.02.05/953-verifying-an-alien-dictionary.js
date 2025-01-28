/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  let previous = words[0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    let j = 0;
    let minHeight = Math.min(previous.length, word.length);
    for (; j < minHeight && previous[j] === word[j]; j++) {}

    if (j === minHeight && previous.length > word.length) {
      return false;
    }

    if (orderMap.get(previous[j]) > orderMap.get(word[j])) {
      return false;
    }

    previous = word;
  }

  return true;
};
