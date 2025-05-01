import { Deque } from "@datastructures-js/deque";

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  // Solution: Binary Search + Deque
  // Time: O(T * logT + W * logW + logT)
  // Space: O(logT + logW + W)

  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const canAssign = (middle) => {
    let boosted = new Deque();
    let w = workers.length - 1;
    let freePills = pills;

    for (let t = middle - 1; t >= 0; t--) {
      const task = tasks[t];

      if (boosted.size() && boosted.front() >= task) {
        boosted.popFront();
      } else if (w >= 0 && workers[w] >= task) {
        w--;
      } else {
        while (w >= 0 && workers[w] + strength >= task) {
          boosted.pushBack(workers[w--]);
        }
        if (!boosted.size() || freePills === 0) {
          return false;
        }

        boosted.popBack();
        freePills--;
      }
    }

    return true;
  };

  let start = 0,
    end = tasks.length;
  while (start < end) {
    let middle = (start + end + 1) >> 1;
    if (canAssign(middle)) {
      start = middle;
    } else {
      end = middle - 1;
    }
  }
  return start;
};

console.log(maxTaskAssign([3, 2, 1], [0, 3, 3], 1, 1)); // 3
console.log(maxTaskAssign([5, 4], [0, 0, 0], 1, 5)); // 1
console.log(maxTaskAssign([10, 15, 30], [0, 10, 10, 10, 10], 3, 10)); // 2
console.log(maxTaskAssign([5, 9, 8, 5, 9], [1, 6, 4, 2, 6], 1, 5)); // 3
// 5 5 8 9 9
// 1 2 4 6 6
