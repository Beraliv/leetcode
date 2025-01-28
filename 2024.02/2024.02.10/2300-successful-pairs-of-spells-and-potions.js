/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  // Solution 1. O((P + S) * logP) time, O(logP) space
  potions.sort((a, b) => a - b);

  const answer = [];
  for (const spell of spells) {
    let start = 0,
      end = potions.length - 1;

    while (start <= end) {
      const middle = (start + end) >> 1;

      if (spell * potions[middle] >= success) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    answer.push(potions.length - start);
  }

  return answer;
  // Solution 2. O(S * logS + P * logP) time, O(S + logP) space
  //   const sortedSpells = [];
  //   for (let i = 0; i < spells.length; i++) {
  //     sortedSpells.push([spells[i], i]);
  //   }

  //   sortedSpells.sort((a, b) => a[0] - b[0]);
  //   potions.sort((a, b) => a - b);

  //   const answer = new Array(spells.length).fill(0);
  //   const m = potions.length;
  //   let potionIndex = m - 1;

  //   for (const [spell, index] of sortedSpells) {
  //     while (potionIndex >= 0 && spell * potions[potionIndex] >= success) {
  //       potionIndex--;
  //     }
  //     answer[index] = m - (potionIndex + 1);
  //   }

  //   return answer;
};
