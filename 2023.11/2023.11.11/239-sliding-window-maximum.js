import { Deque } from "@datastructures-js/deque";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const windowMax = Array(nums.length - k + 1).fill(-1);

  // {el: number, index: number}
  const maxDeque = new Deque([{ element: nums[0], index: 0 }]);
  for (let i = 1; i < k; i++) {
    if (!maxDeque.isEmpty() && nums[i] > maxDeque.front().element) {
      maxDeque.clear();
    }
    while (!maxDeque.isEmpty() && nums[i] > maxDeque.back().element) {
      maxDeque.popBack();
    }

    maxDeque.pushBack({ element: nums[i], index: i });
  }

  // 2 1 3

  let j = 0;
  windowMax[j++] = maxDeque.front().element;

  for (let i = k; i < nums.length; i++) {
    if (!maxDeque.isEmpty() && i - maxDeque.front().index >= k) {
      maxDeque.popFront();
    }
    if (!maxDeque.isEmpty() && nums[i] > maxDeque.front().element) {
      maxDeque.clear();
    }
    while (!maxDeque.isEmpty() && nums[i] > maxDeque.back().element) {
      maxDeque.popBack();
    }
    maxDeque.pushBack({ element: nums[i], index: i });
    windowMax[j++] = maxDeque.front().element;
  }

  return windowMax;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // [3, 3, 2, 5]
