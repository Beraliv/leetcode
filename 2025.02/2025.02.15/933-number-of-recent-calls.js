import { Queue } from "@datastructures-js/queue";

var RecentCounter = function () {
  this.queue = new Queue();
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // Solution: Queue + Dequeue old entries (> 3s)
  // Time: O(N)
  // Space: O(N)

  this.queue.enqueue(t);

  while (!this.queue.isEmpty() && t - this.queue.front() > 3000) {
    this.queue.dequeue();
  }

  return this.queue.size();
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
const rc = new RecentCounter();
console.log(`t=1,    requests=${rc.ping(1)}`);
console.log(`t=100,  requests=${rc.ping(100)}`);
console.log(`t=3001, requests=${rc.ping(3001)}`);
console.log(`t=3002, requests=${rc.ping(3002)}`);
