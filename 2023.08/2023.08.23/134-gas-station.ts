function canCompleteCircuit(gas: number[], cost: number[]): number {
  let i = 0,
    totalSum = 0,
    nonDescSum = 0,
    pos = -1;

  while (i < gas.length) {
    const diff = gas[i] - cost[i];

    nonDescSum += diff;
    if (nonDescSum >= 0) {
      if (pos === -1) {
        pos = i;
      }
    } else {
      nonDescSum = 0;
      pos = -1;
    }

    totalSum += diff;
    i++;
  }

  if (totalSum < 0) {
    return -1;
  }

  return pos;
}

// [-6,1,2,3,-7,3,4]
// i = 0, v = -6, nonDescSum = -6 => nonDescSum = 0, totalSum = -6
// i = 1, v = 1, nonDescSum = 1 => pos = 1, totalSum = -5
// i = 2, v = 2, nonDescSum = 3, totalSum = -3
// i = 3, v = 3, nonDescSum = 6, totalSum = 0
// i = 4, v = -7, nonDescSum = -1 => nonDescSum = 0, pos = -1, totalSum = -7,
// i = 5, v = 3, nonDescSum = 3 => pos = 5, totalSum = -4
// i = 6, v = 4, nonDescSum = 7, totalSum = 0
// return 5

// gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// i = 0, sum = 0, diff = -2 => sum = -2
// i = 1, sum = -2, diff = -2 => sum = -4
// i = 2, sum = -4, diff = -2 => sum = -6
// i = 3, sum = -6, diff = 3, !inc && sum < sum + diff => inc = true, pos = 3, sum = -3
// i = 4, sum = -3, diff = 3, sum = 0

// [-7,3,4,-6,1,2,3]
