const backtrack = (nums, answers, current) => {
  if (nums.length === current.size) {
    answers.push([...current]);
    return;
  }

  for (const num of nums) {
    if (!current.has(num)) {
      current.add(num);
      backtrack(nums, answers, current);
      current.delete(num);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // Solution 1. Iterative
  //   let permutations = [[nums[0]]];
  //   for (let i = 1; i < nums.length; i++) {
  //     const num = nums[i];
  //     const nextPermutations = [];
  //     for (let j = 0; j < i + 1; j++) {
  //       for (const permutation of permutations) {
  //         const newPermutation = [];
  //         newPermutation.push(...permutation.slice(0, j));
  //         newPermutation.push(num);
  //         newPermutation.push(...permutation.slice(j));
  //         nextPermutations.push(newPermutation);
  //       }
  //     }
  //     permutations = nextPermutations;
  //   }
  //   return permutations;
  // Solution 2. Backtracking
  const answers = [];
  backtrack(nums, answers, new Set());
  return answers;
};

// i = 3, num = 4
// permutations = [3, 2, 1], [2, 3, 1], [2, 1, 3], [3, 1, 2], [1, 3, 2], [1, 2, 3];
// j = 0, [4, ...], [., 4, ...], ..., [..., 4]

// [1]
// [2, 1], [1, 2]
// [3, 2, 1], [2, 3, 1], [2, 1, 3], [3, 1, 2], [1, 3, 2], [1, 2, 3]

console.log(permute([1, 2, 3, 4]));
console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
