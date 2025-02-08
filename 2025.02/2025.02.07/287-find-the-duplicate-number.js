/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Solution 1. Extra space
  // Time: O(N)
  // Space: O(N)

  // const occurrences = Array(nums.length + 1).fill(false);

  // for (const num of nums) {
  //   if (occurrences[num]) {
  //     return num;
  //   }

  //   occurrences[num] = true;
  // }

  // return -1;

  // Solution 2: Mutation: Negative Marking
  // Time: O(N)
  // Space: O(1)
  // Mutation: yes

  // let duplicate = -1;

  // for (let i = 0; i < nums.length; i++) {
  //   const value = Math.abs(nums[i]);
  //   if (nums[value] < 0) {
  //     duplicate = value;
  //     break;
  //   }
  //   nums[value] *= -1;
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = Math.abs(nums[i]);
  // }

  // return duplicate;

  // Solution 3: Floyd's Cycle Finding algorithm (Cycle detection)

  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
};

// nums = [3,3,1,2,4]
// idx =   0,1,2,3,4
// slow = 3, fast = 3
// return 3
