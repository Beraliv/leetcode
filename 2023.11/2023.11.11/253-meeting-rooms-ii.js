import { MinPriorityQueue } from "@datastructures-js/priority-queue";

export {};

const isFree = (minHeap, startTime) => {
  const endTime = minHeap.front().element;
  return endTime <= startTime;
};

const bookRoom = (minHeap, newEndTime) => {
  minHeap.dequeue();
  minHeap.enqueue(newEndTime);
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length < 2) {
    return intervals.length;
  }

  intervals.sort(([startTime1], [startTime2]) => startTime1 - startTime2);

  const minHeap = new MinPriorityQueue({
    priority: (value) => value,
  });

  for (const [startTime, endTime] of intervals) {
    if (minHeap.size() === 0) {
      minHeap.enqueue(endTime);
    } else if (isFree(minHeap, startTime)) {
      bookRoom(minHeap, endTime);
    } else {
      minHeap.enqueue(endTime);
    }
  }

  return minHeap.size();
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
