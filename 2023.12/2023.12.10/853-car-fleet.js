/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
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
