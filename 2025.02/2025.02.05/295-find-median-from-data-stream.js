import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

export {};

var MedianFinder = function () {
  // Time: O(1)
  // Space: O(N)

  // smaller half
  this.maxQueue = new MaxPriorityQueue({ priority: (value) => value });
  // bigger half
  this.minQueue = new MinPriorityQueue({ priority: (value) => value });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxQueue.size() === 0 || this.minQueue.size() === 0) {
    this.maxQueue.enqueue(num);
  } else {
    const median = this.findMedian();

    if (num < median) {
      this.maxQueue.enqueue(num);
    } else {
      this.minQueue.enqueue(num);
    }
  }

  // Time: O(logN)
  // Space: O(1)

  // balancing
  if (this.minQueue.size() > this.maxQueue.size() + 1) {
    this.maxQueue.enqueue(this.minQueue.dequeue().element);
  } else if (this.maxQueue.size() > this.minQueue.size() + 1) {
    this.minQueue.enqueue(this.maxQueue.dequeue().element);
  }
};

// maxQueue = [0, 1], minQueue = [2, 3]
// addNum(1)
// addNum(2)
// addNum(3)
// addNum(0)

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // Time: O(1)
  // Space: O(1)

  if (this.minQueue.size() > this.maxQueue.size()) {
    return this.minQueue.front().element;
  }

  if (this.maxQueue.size() > this.minQueue.size()) {
    return this.maxQueue.front().element;
  }

  return (this.maxQueue.front().element + this.minQueue.front().element) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const test = (actions, values, expected) => {
  let medianFinder;

  const actual = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    switch (action) {
      case "MedianFinder":
        medianFinder = new MedianFinder();
        break;
      case "addNum":
        medianFinder.addNum(...values[i]);
        break;
      case "findMedian":
        actual.push(medianFinder.findMedian());
        break;
    }
  }

  if (
    Array.isArray(expected) &&
    !actual.every((value, index) => value === expected[index])
  ) {
    throw new Error(`Expected to have ${actual} but got ${expected}`);
  }

  return actual;
};

console.log(test(["MedianFinder", "addNum", "findMedian"], [[], [1], []])); // [1]
console.log(
  test(
    ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"],
    [[], [1], [], [2], []]
  )
); // [1, 1.5]
console.log(
  test(
    [
      "MedianFinder",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
    ],
    [[], [1], [], [2], [], [3], []]
  )
); // [1, 1.5, 2]
console.log(
  test(
    [
      "MedianFinder",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
    ],
    [[], [1], [], [2], [], [3], [], [4], []]
  )
); // [1, 1.5, 2, 2.5]
console.log(
  test(
    [
      "MedianFinder",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
      "addNum",
      "findMedian",
    ],
    [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []]
  )
); // [-1, -1.5, -2, -2.5]
