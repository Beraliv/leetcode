import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxQueue = new MaxPriorityQueue({ priority: (value) => value });

  for (const stone of stones) {
    maxQueue.enqueue(stone);
  }

  while (maxQueue.size() > 1) {
    const x = maxQueue.dequeue().element;
    const y = maxQueue.dequeue().element;

    if (x !== y) {
      maxQueue.enqueue(x - y);
    }
  }

  if (maxQueue.size() > 0) {
    return maxQueue.dequeue().element;
  }

  return 0;
};

console.log(lastStoneWeight([1]));
