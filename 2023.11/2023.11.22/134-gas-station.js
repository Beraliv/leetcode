/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gain = 0;
  let globalGain = 0;
  let answer = 0;

  for (let i = 0; i < gas.length; i++) {
    gain += gas[i] - cost[i];
    globalGain += gas[i] - cost[i];

    if (gain < 0) {
      answer = i + 1;
      gain = 0;
    }

    console.log([gain, globalGain, answer]);
  }

  return globalGain >= 0 ? answer : -1;
};
