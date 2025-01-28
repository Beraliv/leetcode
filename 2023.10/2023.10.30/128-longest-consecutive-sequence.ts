// 29m
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set<number>();
  for (const num of nums) {
    set.add(num);
  }

  let maxCount = 1;
  for (const num of nums) {
    if (set.has(num - 1)) {
      continue;
    }

    let element = num;
    let count = 1;
    while (set.has(element + 1)) {
      count++;
      set.delete(element + 1);
      element++;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}
