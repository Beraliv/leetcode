/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function (nums, queries) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  const marked = Array.from({ length: nums.length }, () => false);

  let sortedIndex = 0;
  const sortedNums = [...nums.map((value, index) => [index, value])].sort(
    ([key1, value1], [key2, value2]) => {
      if (value1 === value2) {
        return key1 - key2;
      }

      return value1 - value2;
    }
  );

  const answer = Array.from({ length: queries.length }, () => 0);

  for (let i = 0; i < queries.length; i++) {
    const [j, k] = queries[i];

    if (!marked[j]) {
      marked[j] = true;
      sum -= nums[j];
    }

    let smallestK = 0;
    while (smallestK < k) {
      if (sortedIndex >= sortedNums.length) {
        break;
      }

      const [key, value] = sortedNums[sortedIndex++];
      if (!marked[key]) {
        marked[key] = true;
        sum -= value;
        smallestK++;
      }
    }

    answer[i] = sum;
  }

  return answer;
};
