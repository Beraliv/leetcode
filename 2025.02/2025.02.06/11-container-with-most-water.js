// https://leetcode.com/problems/container-with-most-water/solutions/6099/yet-another-way-to-see-what-happens-in-the-on-algorithm/comments/236172
// I know that some people are still having a hard time understanding this
// proof, but please re-read original proof a few times. Here is my example hope
// it helps.

// [4 (left) , 9, 12, 7 , 8, 14 (right) ] --------> this array is indexed from 1
// to 6 and we look at left and right and compare the value

// So eliminate all pairs of index [1,2], [1,3],[1,4],[1,5] <- here the index[]
// means possible windows of solutions (4,9), (4,9,12), (4,9,12,7)... Why? area
// of window [1,6] = (6 - 1) * MIN(4, 14) = 20 all the windows that have
// [1,2...5] even if all the numbers on the right are changed to infinity must
// be less than 20. EX: (5-1) * min(4, infinity) < 20 for all right indices
// less than 6. So this means it's ok to exclude all windows starting with index
// 1

// If you apply this at each step over and over again you can get an O(n) algorithm.
function maxArea(height) {
  // Time: O(N)
  // Space: O(1)

  let start = 0,
    end = height.length - 1;
  let maxWater = -Infinity;

  while (start < end) {
    maxWater = Math.max(
      maxWater,
      Math.min(height[start], height[end]) * (end - start)
    );

    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxWater;
}
