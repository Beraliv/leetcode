// easy
// time is 5m
// Best Conceivable Runtime - O(N)
function containsDuplicate(nums: number[]): boolean {
  // O(N) space
  let set = new Set<number>();

  // O(N) time
  for (const num of nums) {
    // O(1) for Sets
    if (set.has(num)) {
      return true;
    }

    // O(1)
    set.add(num);
  }

  return false;
}
