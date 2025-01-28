const last = (arr) => arr[arr.length - 1];

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  let count = 0;

  const dfs = (lastValue, removed, indexSet, index) => {
    if (index >= nums.length) {
      if (removed.length !== 0) {
        count++;
      }
      return;
    }

    if (lastValue === undefined) {
      // with
      // console.log('with', nums[index]);
      dfs(nums[index], removed, indexSet, index + 1);

      // without
      // console.log('without', nums[index]);
      removed.push(nums[index]);
      indexSet.add(index);
      dfs(lastValue, removed, indexSet, index + 1);
      indexSet.delete(index);
      removed.pop();
    } else {
      if (lastValue < nums[index]) {
        // with
        // console.log('with', nums[index]);
        dfs(nums[index], removed, indexSet, index + 1);

        // without
        if (indexSet.size === 0 || indexSet.has(index - 1)) {
          // console.log('without', nums[index]);
          removed.push(nums[index]);
          indexSet.add(index);
          dfs(lastValue, removed, indexSet, index + 1);
          indexSet.delete(index);
          removed.pop();
        }
      } else {
        // without
        if (indexSet.size === 0 || indexSet.has(index - 1)) {
          // console.log('without', nums[index]);
          removed.push(nums[index]);
          indexSet.add(index);
          dfs(lastValue, removed, indexSet, index + 1);
          indexSet.delete(index);
          removed.pop();
        }
      }
    }
  };

  dfs(undefined, [], new Set(), 0);

  return count;
};
