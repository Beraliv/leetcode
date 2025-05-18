const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Solution 1: 2 Pass Iteration
  // Time: O(N)
  // Space: O(1)

  //   let red = 0,
  //     white = 0,
  //     blue = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //       red++;
  //     } else if (nums[i] === 1) {
  //       white++;
  //     } else if (nums[i] === 2) {
  //       blue++;
  //     }
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (i < red) {
  //       nums[i] = 0;
  //     } else if (i < red + white) {
  //       nums[i] = 1;
  //     } else {
  //       nums[i] = 2;
  //     }
  //   }

  // Solution 2: 1 Pass Iteration
  // Time: O(N)
  // Space: O(1)

  let red = 0,
    white = 0,
    blue = nums.length - 1;

  while (white <= blue) {
    if (nums[white] === 0) {
      swap(nums, red++, white++);
    } else if (nums[white] === 1) {
      white++;
    } else {
      swap(nums, white, blue--);
    }
  }
};

// red = 1, white = 2, blue = 1;
// [0, 1, 2]
//     ^

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
