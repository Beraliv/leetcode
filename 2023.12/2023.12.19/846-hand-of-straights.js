/**
 * Same as `1296-divide-array-in-sets-of-k-consecutive-numbers`
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const map = new Map();

  for (const n of hand) {
    const count = (map.get(n) || 0) + 1;
    map.set(n, count);
  }

  hand.sort((a, b) => a - b);

  for (let i = 0; i < hand.length; i++) {
    if (map.get(hand[i]) === 0) {
      continue;
    }

    for (let j = 0; j < groupSize; j++) {
      let card = hand[i] + j;
      const count = map.get(card) || 0;

      if (count === 0) {
        return false;
      }

      map.set(card, count - 1);
    }
  }

  return true;
};
