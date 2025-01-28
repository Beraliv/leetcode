const nonDecreasingOrder = (a, b) => a - b;

const twoSumClosest = (nums, startIndex, target) => {
  let left = startIndex;
  let right = nums.length - 1;

  let diff = Infinity;
  let closestSum = Infinity;

  while (left < right) {
    let sum = nums[left] + nums[right];
    const diffCandidate = Math.abs(sum - target);

    if (diffCandidate < diff) {
      diff = diffCandidate;
      closestSum = sum;
    }

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      break;
    }
  }

  return closestSum;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort(nonDecreasingOrder);

  let diff = Infinity;
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let sum = nums[i] + twoSumClosest(nums, i + 1, target - nums[i]);
    let diffCandidate = Math.abs(sum - target);

    if (diffCandidate < diff) {
      diff = diffCandidate;
      closestSum = sum;
    }
  }

  return closestSum;
};
