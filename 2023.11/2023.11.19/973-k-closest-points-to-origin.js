/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const closestQueue = new MaxPriorityQueue({
    priority: ([x, y]) => Math.sqrt(x * x + y * y),
  });

  for (const point of points) {
    closestQueue.enqueue(point);

    if (closestQueue.size() > k) {
      closestQueue.dequeue();
    }
  }

  const answer = [];
  while (!closestQueue.isEmpty()) {
    answer.push(closestQueue.dequeue().element);
  }
  return answer;
};
