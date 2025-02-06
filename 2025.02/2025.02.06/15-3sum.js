function twoSum(nums, index, result) {
  let start = index + 1;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[index] + nums[start] + nums[end];
    if (sum < 0) {
      start++;
    } else if (sum > 0) {
      end--;
    } else {
      result.push([nums[index], nums[start++], nums[end--]]);
      while (start < end && nums[start] === nums[start - 1]) {
        start++;
      }
    }
  }
}

// 15min
function threeSum(nums) {
  // Approach 1. Sort + 2 pointers
  // Time: O(N * logN + N * N) = O(N ^ 2)
  // Space: O(logN)

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, result);
    }
  }

  return result;
}

// // 29m;
// function threeSum(nums) {
//   // Approach 2. 2 HashMaps + Brute Force
//   // Time: O(N ^ 3)
//   // Space: O(N)

//   const numMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const indices = numMap.get(num) || new Set();
//     indices.add(i);
//     numMap.set(num, indices);
//   }

//   const map = new Map();

//   for (const first of numMap.keys()) {
//     const is = numMap.get(first);
//     for (const second of numMap.keys()) {
//       const js = numMap.get(second);
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
