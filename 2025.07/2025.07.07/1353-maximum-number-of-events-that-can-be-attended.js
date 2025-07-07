import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  // Solution: Sort + Min Heap
  // Time: O(N * logN)
  // Space: O(N)

  let maxDay = 0;
  for (let i = 0; i < events.length; i++) {
    maxDay = Math.max(maxDay, events[i][1]);
  }

  events.sort((a, b) => a[0] - b[0]);

  const minEndDayHeap = new MinPriorityQueue();
  let count = 0;

  for (let startDay = 1, day = 0; startDay <= maxDay; startDay++) {
    while (day < events.length && events[day][0] <= startDay) {
      minEndDayHeap.enqueue(events[day][1]);
      day++;
    }

    while (minEndDayHeap.size() > 0 && minEndDayHeap.front() < startDay) {
      minEndDayHeap.dequeue();
    }

    if (minEndDayHeap.size() > 0) {
      minEndDayHeap.dequeue();
      count++;
    }

    if (day >= events.length && minEndDayHeap.size() === 0) {
      break;
    }
  }

  return count;
};

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 3
console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2],
  ])
); // 4
console.log(
  maxEvents([
    [1, 2],
    [1, 2],
    [3, 3],
    [1, 5],
    [1, 5],
  ])
); // 5
console.log(
  maxEvents([
    [1, 10],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
  ])
); // 2
