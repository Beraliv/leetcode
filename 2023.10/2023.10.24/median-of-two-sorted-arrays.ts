// function merge(nums1: number[], nums2: number[]): number[] {
//   let index = 0;
//   let result = Array(nums1.length + nums2.length).fill(0);

//   let left = 0,
//     right = 0;

//   while (index < result.length) {
//     if (right >= nums2.length || nums1[left] < nums2[right]) {
//       result[index++] = nums1[left++];
//     } else if (left >= nums1.length || nums1[left] > nums2[right]) {
//       result[index++] = nums2[right++];
//     } else if (nums1[left] === nums2[right]) {
//       result[index++] = nums1[left++];
//       result[index++] = nums2[right++];
//     }
//   }

//   return result;
// }

// function median(nums: number[]): number {
//   const length = nums.length;

//   // even length

//   if (length % 2 === 0) {
//     const leftIndex = length / 2 - 1;
//     const rightIndex = leftIndex + 1;

//     return (nums[leftIndex] + nums[rightIndex]) / 2;
//   }

//   // odd length

//   const index = (length - 1) / 2;

//   return nums[index];
// }

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const nums = merge(nums1, nums2);
//   return median(nums);
// }

function sum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

function getMedian(medianCandidates: number[]): number {
  const medianValues = getMedianCandidates(medianCandidates);

  if (medianValues.length === 1) {
    return medianValues[0];
  }

  return sum(medianValues) / 2;
}

function getMedianCandidates(nums: number[]): number[] {
  const n = nums.length;

  if (n === 0) {
    return [];
  }

  if (n % 2 === 0) {
    return [nums[n / 2], nums[n / 2 - 1]];
  }

  return [nums[(n - 1) / 2]];
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const medianCandidates1 = getMedianCandidates(nums1);
  const medianCandidates2 = getMedianCandidates(nums2);
  // 2 to 4 elements
  const medianCandidates = [...medianCandidates1, ...medianCandidates2].sort(
    (a, b) => a - b
  );
  const median = getMedian(medianCandidates);
  return median;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2, 3], [1, 2, 3]));
