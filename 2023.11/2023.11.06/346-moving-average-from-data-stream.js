// 18m
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  // Time: O(N)
  // Size: O(N)
  this.size = size;
  if (size === 0) return;
  this.values = Array(size).fill(0);
  this.index = 0;
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (value) {
  // Time: O(1)
  // Space: O(1)
  if (this.size === 0) return -1;
  const circularIndex = this.index % this.size;
  const previousValue = this.values[circularIndex];
  this.values[circularIndex] = value;
  this.sum = this.sum - previousValue + value;
  this.index++;
  return this.sum / Math.min(this.size, this.index);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
