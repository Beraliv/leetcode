/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // // Solution 1. Stacks
  // // Time: O(N)
  // // Space: O(N)
  // const stack = [];
  // let sum = 0;
  // for (let i = 0; i < height.length; i++) {
  //   while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
  //     const j = stack.pop();
  //     if (stack.length === 0) {
  //       break;
  //     }
  //     const k = stack[stack.length - 1];
  //     // k   i
  //     // k j i
  //     const width = i - k - 1;
  //     const depth = Math.min(height[i], height[k]) - height[j];
  //     sum += width * depth;
  //   }
  //   stack.push(i);
  // }
  // return sum;

  // Solution 2. 2 Pointers
  // Time: O(N)
  // Space: O(1)

  let area = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      area += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      area += rightMax - height[right];
      right--;
    }
  }

  return area;
};

// x
// x
// xx++x
// xx+xx

// left = 0, right = 0, leftMax = 0, rightMax = 2
// water = 0 + (2 - 1) + (2 - 0) + (2 - 2)
