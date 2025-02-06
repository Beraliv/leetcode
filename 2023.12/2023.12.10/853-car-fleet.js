/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  // Approach 1. Sort + iteration from end position to start
  // Time: O(P * logP)
  // Space: O(logP)

  // const sortedPositions = position
  //   .map((position, i) => [position, i])
  //   .sort(([a], [b]) => a - b);

  // let count = 0;
  // let maxTime = 0;

  // for (let i = sortedPositions.length - 1; i >= 0; i--) {
  //   const [pos, j] = sortedPositions[i];
  //   const time = (target - pos) / speed[j];

  //   if (time > maxTime) {
  //     maxTime = time;
  //     count++;
  //   }
  // }

  // return count;

  // Approach 2. HashMap + iteration from target to start
  // Time: O(P + T)
  // Space: O(P)

  // const road = new Map();
  // for (let i = 0; i < position.length; i++) {
  //   road.set(position[i], (target - position[i]) / speed[i]);
  // }

  // let count = 0;
  // let maxTime = 0;

  // for (let i = target; i >= 0; i--) {
  //   if (!road.has(i)) {
  //     continue;
  //   }

  //   const time = road.get(i);
  //   if (time > maxTime) {
  //     maxTime = time;
  //     count++;
  //   }
  // }

  // return count;

  // Approach 3. Array + iteration from target to start
  // Time: O(T)
  // Space: O(T)

  const road = Array(target + 1).fill(null);
  for (let i = 0; i < position.length; i++) {
    road[position[i]] = (target - position[i]) / speed[i];
  }

  let eta = -1;
  let count = 0;
  for (let i = target; i >= 0; i--) {
    if (road[i] === null) {
      continue;
    }

    if (road[i] > eta) {
      count++;
      eta = road[i];
    }
  }

  return count;
};

// 2025

// target = 12
// position = [10,8,6,4]
// speed [2,4,6,4]
// time=[1,1,1,2]
// answer = 2

// target=12
// position=[10,8,0,5,3]
// speed=[2,4,1,1,3]

// sortedPositions = [[0, 2], [3, 4], [5, 3], [8, 1], [10, 0]]
// count = 3, maxTime = 12
// i = 4, pos = 10, j = 0, time = 2 / 2 = 1
// i = 3, pos = 8, j = 1, time = 4 / 4 = 1
// i = 2, pos = 5, j = 3, time = 7 / 1 = 7
// i = 1, pos = 3, j = 4, time = 9 / 3 = 3
// i = 0, pos = 0, j = 2, time = 12 / 1 = 12
// return 3

// 2023

// p1 + s1 * t = p2 + s2 * t
// t = (p2 - p1) / (s1 - s2) - time to meet each other
// pos = p1 + s1 * t - position to meet each other
// if (pos <= target) => one fleet
// else => different fleet

// t = (8 - 10) / (2 - 4) = 1
// pos = 10 + 2 * 1 = 12 - one fleet

// position = [1,   2,   3, 4, 5,    6], target = 7
// speed =    [5,   2,   4, 1, 6,    3]
// arrival =  [1.2, 2.5, 1, 3, 0.33, 0.33]
