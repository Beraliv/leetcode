// 1. [1, 2, 1], 1
// occ = {1: 1}, fre = {1: {1}}
// occ = {1: 1, 2: 1}, fre = {1: {1, 2}}
// occ = {1: 2, 2: 1}, fre = {1: {2}, 2: {1}}
// keys = [2, 1]
// [1]

// best conceivable time - O(N)
// most frequent elements
function topKFrequent(nums: number[], k: number): number[] {
  // 1. Map<number, number>
  const occurrencyMap = new Map<number, number>();
  // 2. Iterate over `nums`
  for (const num of nums) {
    // 3. For each `num` in `nums` count number of occurrences
    const countBefore = occurrencyMap.get(num) || 0;
    const countAfter = countBefore + 1;
    occurrencyMap.set(num, countAfter);
  }

  const buckets = new Array(nums.length + 1).fill(0).map<number[]>(() => []);
  for (const [num, count] of occurrencyMap.entries()) {
    buckets[count].push(num);
  }

  let pickedNums: number[] = [];

  for (let i = nums.length; i >= 0; i--) {
    const bucket = buckets[i];

    for (const num of bucket) {
      pickedNums.push(num);

      if (pickedNums.length === k) {
        return pickedNums;
      }
    }
  }

  // this is required for TypeScript
  return [];

  // Time: O(N)
  // Space: O(N)
}
