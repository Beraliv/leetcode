function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }

  const options = new Map();
  for (const num of nums) {
    options.set(num, (options.get(num) || 0) + 1);
  }

  const permutations = [];

  const backtrack = (permutation) => {
    if (permutation.length === nums.length) {
      permutations.push([...permutation]);
      return;
    }

    const entries = [...options.entries()];
    for (const [option, count] of entries) {
      permutation.push(option);
      if (count === 1) {
        options.delete(option);
      } else {
        options.set(option, count - 1);
      }
      backtrack(permutation);
      permutation.pop();
      options.set(option, count);
    }
  };

  backtrack([]);

  return permutations;
}

// nums = [1,1,2]
// options = {1: 2}
// permutations = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

// 112 (012)

// 112 (012)
// 121 (021)
// 112 (102)
// 121 (120)
// 211 (201)
// 211 (210)

// 112 (012)
// 121 (021)
// 211 (201)

//     []
//   1     2
// 11  12  21
// 112 121 211
