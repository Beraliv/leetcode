import { MinPriorityQueue } from "@datastructures-js/priority-queue";

var NumberContainers = function () {
  this.numberToIndices = new Map();
  this.indexToNumbers = new Map();
};

/**
 * @param {number} index
 * @param {number} current
 * @return {void}
 */
NumberContainers.prototype.change = function (index, current) {
  if (this.indexToNumbers.has(index)) {
    const previous = this.indexToNumbers.get(index);

    if (previous === current) {
      return;
    }
  }

  this.indexToNumbers.set(index, current);
  if (!this.numberToIndices.has(current)) {
    const minHeap = new MinPriorityQueue({ priority: (value) => value });
    this.numberToIndices.set(current, minHeap);
  }
  this.numberToIndices.get(current).enqueue(index);
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  if (!this.numberToIndices.has(number)) {
    return -1;
  }

  const minHeap = this.numberToIndices.get(number);
  while (!minHeap.isEmpty()) {
    const index = minHeap.front().element;
    if (this.indexToNumbers.get(index) === number) {
      return index;
    }
    minHeap.dequeue();
  }
  return -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

const test = (actions, values, expected) => {
  let nc;

  const actual = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    switch (action) {
      case "NumberContainers":
        nc = new NumberContainers();
        break;
      case "change":
        nc.change(...values[i]);
        break;
      case "find":
        actual.push(nc.find(...values[i]));
        break;
    }
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        `Expected to have ${actual[i]} but got ${expected[i]} at index ${i}`
      );
    }
  }

  return actual;
};

console.log(
  test(
    [
      "NumberContainers",
      "change",
      "change",
      "find",
      "find",
      "find",
      "change",
      "find",
      "find",
      "change",
      "find",
      "change",
      "change",
      "change",
      "find",
      "find",
      "change",
      "find",
      "change",
      "change",
      "change",
    ],
    [
      [],
      [25, 50],
      [56, 31],
      [50],
      [50],
      [43],
      [30, 50],
      [31],
      [43],
      [25, 20],
      [50],
      [56, 43],
      [68, 31],
      [56, 31],
      [20],
      [43],
      [25, 43],
      [43],
      [56, 31],
      [54, 43],
      [63, 43],
    ],
    [25, 25, -1, 56, -1, 30, 25, -1, 25]
  )
);
