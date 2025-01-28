function productExceptSelf(nums: number[]): number[] {
  let output = Array(nums.length).fill(1);

  let left = nums[0];
  for (let i = 1; i < nums.length; i++) {
    output[i] *= left;
    left *= nums[i];
  }

  let right = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }

  return output;
}
