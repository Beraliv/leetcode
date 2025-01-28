/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let rCount = 0;
  let dCount = 0;

  const queue = new Queue();

  for (const party of senate) {
    queue.enqueue(party);
    if (party === "R") {
      rCount++;
    } else {
      dCount++;
    }
  }

  let dFloating = 0;
  let rFloating = 0;

  while (rCount > 0 && dCount > 0) {
    const current = queue.dequeue();

    if (current === "D") {
      if (dFloating > 0) {
        dFloating--;
        dCount--;
      } else {
        rFloating++;
        queue.enqueue("D");
      }
    } else {
      if (rFloating > 0) {
        rFloating--;
        rCount--;
      } else {
        dFloating++;
        queue.enqueue("R");
      }
    }
  }

  return rCount > 0 ? "Radiant" : "Dire";
};
