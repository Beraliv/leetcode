/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  // Solution 1: HashMap + Brute Force + HashSet
  // Time: O(N ^ 2)
  // Space: O(N)

  //   const countMap = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] in countMap) {
  //       countMap[nums[i]]++;
  //     } else {
  //       countMap[nums[i]] = 1;
  //     }
  //   }
  //   const uniqueCount = Object.keys(countMap).length;

  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     const set = new Set();
  //     for (let j = i; j < nums.length; j++) {
  //       set.add(nums[j]);
  //       if (set.size === uniqueCount) {
  //         count++;
  //       }
  //     }
  //   }

  //   return count;

  // Solution 2: HashMap + Two Pointers
  // Time: O(N)
  // Space: O(N)

  //   let uniqueCount = 0;
  //   const countObj = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] in countObj) {
  //       countObj[nums[i]]++;
  //     } else {
  //       countObj[nums[i]] = 1;
  //       uniqueCount++;
  //     }
  //   }
  const uniqueCount = new Set(nums).size;

  let count = 0;
  let left = 0;
  const windowObj = {};
  let windowCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] in windowObj) {
      windowObj[nums[right]]++;
    } else {
      windowObj[nums[right]] = 1;
      windowCount++;
    }
    while (windowCount === uniqueCount) {
      count += nums.length - right;
      windowObj[nums[left]]--;
      if (windowObj[nums[left]] === 0) {
        windowCount--;
        delete windowObj[nums[left]];
      }
      left++;
    }
  }

  return count;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2])); // 4
console.log(countCompleteSubarrays([1, 3, 1, 2, 2, 2])); // 6
console.log(countCompleteSubarrays([5, 5, 5, 5])); // 10
