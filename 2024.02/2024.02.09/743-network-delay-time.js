/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adjMap = Array.from({ length: n + 1 }, () => []);
  for (const [from, to, weight] of times) {
    adjMap[from].push([to, weight]);
  }

  const minTimes = Array.from({ length: n + 1 }, () => Infinity);
  const minQueue = new MinPriorityQueue({ priority: (tuple) => tuple[1] });
  minQueue.enqueue([k, 0]);
  minTimes[k] = 0;

  while (!minQueue.isEmpty()) {
    const [node, nodeTime] = minQueue.dequeue().element;
    if (nodeTime > minTimes[node]) {
      continue;
    }

    const neighbours = adjMap[node];
    for (const [neighbour, neighbourTime] of neighbours) {
      if (minTimes[neighbour] > nodeTime + neighbourTime) {
        minTimes[neighbour] = nodeTime + neighbourTime;
        minQueue.enqueue([neighbour, minTimes[neighbour]]);
      }
    }
  }

  let answer = -Infinity;
  for (let i = 1; i <= n; i++) {
    answer = Math.max(answer, minTimes[i]);
  }

  return answer === Infinity ? -1 : answer;
};

// times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]]
// n = 4
// k = 2
// adjMap = {1: [], 2: [1, 3], 3: [4], 4: []}
// weights = [
//    [0, 0, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [0, 1, 0, 1, 0],
//    [0, 0, 0, 0, 1],
//    [0, 0, 0, 0, 0],
// ]
// minWeights = {1: 1, 2: 0, 3: 1, 4: 2}
// minQueue = []
// step 1
// node = 2, nodeWeight = 0, neighbours = [1, 3]
// neighbour = 1, currentWeight = Infinity, weight = 1
// neighbour = 3, currentWeight = Infinity, weight = 1
// step 2
// node = 1, nodeWeight = 1, neighbours = []
// step 3
// node = 3, nodeWeight = 1, neighbours = [4]
// neighbour = 4, currentWeight = Infinity, weight = 2
// minTime = Infinity
//
