// // 29m
// function threeSum(nums: number[]): number[][] {
//   const numMap = new Map<number, Set<number>>();
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const indices = numMap.get(num) || new Set();
//     indices.add(i);
//     numMap.set(num, indices);
//   }

//   const map = new Map<string, number[]>();

//   for (const first of numMap.keys()) {
//     const is = numMap.get(first)!;
//     for (const second of numMap.keys()) {
//       const js = numMap.get(second)!;
//       if (first === second && is.size < 2) {
//         continue;
//       }
//       const sum = first + second;
//       const third = -sum;
//       if (third === first && is.size < 3) {
//         continue;
//       }
//       if (numMap.has(third)) {
//         if (first === third && is.size < 2) {
//           continue;
//         }
//         if (second === third && js.size < 2) {
//           continue;
//         }

//         const sortedArr = [first, second, third].sort((a, b) => a - b);
//         const hash = sortedArr.join("_");
//         if (!map.has(hash)) {
//           map.set(hash, sortedArr);
//         }
//       }
//     }
//   }

//   return [...map.values()];
// }
function twoSum(nums: number[], index: number, result: number[][]) {
  let lower = index + 1;
  let higher = nums.length - 1;

  while (lower < higher) {
    const sum = nums[index] + nums[lower] + nums[higher];
    if (sum < 0) {
      lower++;
    } else if (sum > 0) {
      higher--;
    } else {
      result.push([nums[index], nums[lower++], nums[higher--]]);
      while (lower < higher && nums[lower] === nums[lower - 1]) {
        lower++;
      }
    }
  }
}

// 15min
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  let result: number[][] = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, result);
    }
  }

  return result;
}
