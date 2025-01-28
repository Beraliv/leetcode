/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  const kSum = Array({ length: nums.length - k + 1 }, () => 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
    }
    if (i >= k - 1) {
      kSum[i - k + 1] = sum;
    }
  }

  let left = Array({ length: kSum.length }, () => 0);
  let best = 0;
  for (let i = 0; i < kSum.length; i++) {
    if (kSum[i] > kSum[best]) {
      best = i;
    }
    left[i] = best;
  }

  let right = Array({ length: kSum.length }, () => 0);
  best = kSum.length - 1;
  for (let i = kSum.length - 1; i >= 0; i--) {
    if (kSum[i] >= kSum[best]) {
      best = i;
    }
    right[i] = best;
  }

  let answer = [-1, -1, -1];
  for (let j = k; j < kSum.length - k; j++) {
    let [i0, j0, l0] = answer;
    let i = left[j - k],
      l = right[j + k];
    if (
      answer[0] === -1 ||
      kSum[i] + kSum[j] + kSum[l] > kSum[i0] + kSum[j0] + kSum[l0]
    ) {
      answer = [i, j, l];
    }
  }

  return answer;
};
