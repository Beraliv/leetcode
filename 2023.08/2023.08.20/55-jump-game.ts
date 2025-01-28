function canJump(nums: number[]): boolean {
  //   ignore zeros at the last position as it's still true
  let i = nums.length - 2;

  while (i >= 0) {
    if (nums[i] === 0) {
      let k = 1,
        found = false;

      // look for the position that allow to jump over a zero
      while (i - k >= 0) {
        if (nums[i - k] > k) {
          found = true;
          break;
        }

        k++;
      }

      if (!found) {
        return false;
      }

      // iterate from the next element
      i = i - k - 1;
    } else {
      i--;
    }
  }

  return true;
}

// 1. [3, 2, 1, 0]
// 2. [3, 2, 1, 0, 4]
// 3. [3, 3, 1, 0, 4]
// 4. [0, 2, 2]
// 5. [0,3,1,0,4,3,2,0,1]
// i = 9 - 2 = 7
// v = 0, j = 7, k = 1, found = false
// j - k = 6, v = 2 > 1, found = true
// i = 7 - 1 - 1 = 5, v = 3
// i = 4, v = 4
// i = 3, v = 0
// k = 1, found = false
// i - k = 2, v = 1 > 1
// k = 2, i - k = 1, v = 3 > 2 => found = true
// i = 3 - 2 - 1 = 0
