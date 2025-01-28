function productExceptSelf(nums: number[]): number[] {
  // The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  const product = Array(nums.length).fill(1);

  let i = 1,
    temp = nums[0];

  while (i < nums.length) {
    product[i] *= temp;
    temp *= nums[i];
    i++;
  }

  i = nums.length - 2;
  temp = nums[nums.length - 1];

  while (i >= 0) {
    product[i] *= temp;
    temp *= nums[i];
    i--;
  }

  return product;
}

// [1, 2, 3, 4]
// i = 1, v = 2, prefix = 1 => product = [1, 1, 1, 1], prefix = 2
// i = 2, v = 3, prefix = 2 => product = [1, 1, 2, 1], prefix = 6
// i = 3, v = 4, prefix = 6 => product = [1, 1, 2, 6], prefix = 24
// j = 2, v = 3, suffix = 4 => product = [1, 1, 8, 6], suffix = 12
// j = 1, v = 2, suffix = 12 => product = [1, 12, 8, 6], suffix = 24
// j = 0, v = 1, suffix = 24 => product = [24, 12, 8, 6], suffix = 24

// [1, 2, 3, 4]
// [prefix]:
// i = 0, v = 1, [1, 1, 1, 1]
// i = 1, v = 2, [1, 2, 1, 1]
// i = 2, v = 3, [1, 2, 6, 1]
// i = 3, v = 4, [1, 2, 6, 24]
// suffix:
// i = 3, v = 4, [1, 1, 1, 4]
// i = 2, v = 3, [1, 1, 12, 4]
// i = 1, v = 2, [1, 24, 12, 4]
// i = 0, v = 1, [24, 24, 12, 4]
// product
// i = 0, i < 3 => [24, 1, 1, 1]
// i = 1, i > 0, i < 3 => [24, 12, 1, 1]
// i = 2, i > 0, i < 3 => [24, 12, 8, 1]
// i = 3, i > 0 => [24, 12, 8, 6]

// [2, 1, 4, 3] => [12, 24, 6, 8]
// 0 = p(1, 3)
// 1 = p(0, 0) * p(2, 3)
// 2 = p(0, 1) * p(3, 3)
// 3 = p(0, 2)
// i = 0, [2, , , ]
// i = 1, [2, 2, , ]
// i = 2, [2, 2, 8, ]
// i = 3 => [2, 2, 8, 24] x
// i = 3, [, , , 3]
// i = 2, [, , 12, 3]
// i = 1, [, 12, 12, 3]
// i = 0 => [24, 12, 12, 3] x
// i = 0 => [12, 1, 1, 1]
// i = 1 => [12, 24, 6, 8]
