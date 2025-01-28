const nonDecreasingOrder = (a, b) => a - b;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort(nonDecreasingOrder);

  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    if (i > 0 && a === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];

      if (j > i + 1 && b === nums[j - 1]) {
        continue;
      }

      const rest = target - a - b;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const c = nums[left];
        const d = nums[right];

        if (left > j + 1 && nums[left] === nums[left - 1]) {
          left++;
          continue;
        }

        if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
          right--;
          continue;
        }

        if (c + d === rest) {
          answer.push([a, b, c, d]);
          left++;
          right--;
        } else if (c + d > rest) {
          right--;
        } else {
          // c + d < rest
          left++;
        }
      }
    }
  }

  return answer;
};
