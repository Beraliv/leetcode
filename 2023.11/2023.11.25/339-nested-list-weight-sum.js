/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {number | null}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[] | null}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * 20m for 2 solutions
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function (nestedList) {
  // Solution 1. O(N) time, O(D) space, where D - number of depth in an array
  // let sum = 0;

  // const iteration = (array, depth) => {
  //     for (const element of array) {
  //         if (element.isInteger()) {
  //             sum += element.getInteger() * depth;
  //         } else {
  //             iteration(element.getList(), depth + 1)
  //         }
  //     }
  // }

  // iteration(nestedList, 1);

  // return sum;

  // Solution 2. O(N) time, O(N) space
  let sum = 0;

  const queue = new Queue();
  queue.enqueue({ array: nestedList, depth: 1 });

  while (!queue.isEmpty()) {
    const { array, depth } = queue.dequeue();

    for (const element of array) {
      if (element.isInteger()) {
        sum += element.getInteger() * depth;
      } else {
        queue.enqueue({ array: element.getList(), depth: depth + 1 });
      }
    }
  }

  return sum;
};

// nestedList = [[1, 1], 2, [1, 1]]
// array = [[1, 1], 2, [1, 1]], depth = 1
// sum = 10
// element = [1, 1]
// array = [1, 1], depth = 2
// element = 2
// element = [1, 1]
// array = [1, 1], depth = 2
