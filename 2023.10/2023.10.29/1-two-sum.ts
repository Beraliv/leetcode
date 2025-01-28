// easy
// time is 5:46
// best receivable time is O(N), where N is nums.length
// best recevable space is O(1) (which may lead to O(N**2) time)
function twoSum(nums: number[], target: number): number[] {
  // O(N) space
  let map = new Map<number, number>();

  // O(N) time
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const neededForTarget = target - num;
    // O(1)
    if (map.has(neededForTarget)) {
      const firstIndex = map.get(neededForTarget)!;

      return [firstIndex, i];
    }

    map.set(num, i);
  }

  return [];
}
