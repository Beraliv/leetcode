var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  const minVal = this.getMin();
  if (minVal === undefined || val < minVal) {
    this.minStack.push([val, this.stack.length - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // silently does nothing
  void this.stack.pop();

  if (
    this.minStack.length > 0 &&
    this.minStack[this.minStack.length - 1][1] === this.stack.length
  ) {
    void this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const minPair = this.minStack.at(-1);
  return minPair !== undefined ? minPair[0] : undefined;
};

// Time: O(1). Space: O(N).
// Version 1: 2 stacks - simple and quick solution
// Version 2: minStack will contain pairs of
// [minValue, index] to avoid repetitions

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Case 1.
const case1 = new MinStack();
console.log(">>> 1: getMin([])", case1.getMin());
case1.push(1);
console.log(">>> 1: getMin([1]", case1.getMin());
case1.push(2);
console.log(">>> 1: getMin([1,2]", case1.getMin());
case1.push(3);
console.log(">>> 1: getMin([1,2,3]", case1.getMin());
case1.push(0);
console.log(">>> 1: getMin([1,2,3,0]", case1.getMin());
case1.pop();
console.log(">>> 1: getMin([1,2,3]", case1.getMin());
