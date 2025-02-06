/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // Solution 1: Smart Brute Force
  // Time: O(N ^ 2)
  // Space: O(1)

  // let maxArea = 0;

  // for (let i = 0; i < heights.length; i++) {
  //     let minHeight = Infinity;
  //     for (let j = i; j < heights.length; j++) {
  //         minHeight = Math.min(minHeight, heights[j]);
  //         maxArea = Math.max(maxArea, minHeight * (j - i + 1))
  //     }
  // }

  // return maxArea;

  // Solution 2: Divide and Conquer
  // Time: O(N * logN) on average, O(N ^ 2) at worst case
  // Space: O(N)

  // const calculate = (start, end) => {
  //     if (start > end) {
  //         return 0;
  //     }

  //     let minIndex = start;
  //     for (let i = start; i <= end; i++) {
  //         if (heights[minIndex] > heights[i]) {
  //             minIndex = i;
  //         }
  //     }

  //     return Math.max(
  //         heights[minIndex] * (end - start + 1),
  //         calculate(start, minIndex - 1),
  //         calculate(minIndex + 1, end)
  //     )
  // };

  // return calculate(0, heights.length - 1);

  // Solution 3: Stack
  // Time: O(N)
  // Space: O(N)

  const stack = [];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0 || heights[stack.at(-1)] < heights[i]) {
      stack.push(i);
    } else {
      while (stack.length > 0 && heights[stack.at(-1)] > heights[i]) {
        const h = heights[stack.pop()];
        const width = i - (stack.length > 0 ? stack.at(-1) : -1) - 1;
        maxArea = Math.max(maxArea, h * width);
      }
      stack.push(i);
    }
  }
  let i = stack.at(-1);
  while (stack.length > 0) {
    const h = heights[stack.pop()];
    const width = i - (stack.length > 0 ? stack.at(-1) : -1);
    maxArea = Math.max(maxArea, h * width);
  }
  return maxArea;
};

// heights = [2, 1, 2, 1, 2, 1]
// stack = [], maxArea = 6
// i = 1, h = 2, width = 1 - (-1) - 1 = 1
// i = 3, h = 2, width = 3 - 1 - 1 = 1
// i = 5, h = 2, width = 5 - 3 - 1 = 1
// i = 5, h = 1, width = 5 - 3 = 2
// i = 5, h = 1, width = 5 - 1 = 4
// i = 5, h = 1, width = 5 - (-1) = 6
