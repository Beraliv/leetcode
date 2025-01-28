type Order = "asc" | "desc" | "equal";

const getOrder = (prev: number, next: number): Order => {
  if (prev < next) {
    return "asc";
  }

  if (prev > next) {
    return "desc";
  }

  return "equal";
};

// 1. Each child must have at least one candy.
// 2. Children with a higher rating get more candies than their neighbors.
function candy(ratings: number[]): number {
  if (ratings.length < 2) {
    return 1;
  }

  // i is index for iteration for ratings
  // k is the coefficient depending on previous element
  let i = 2,
    order = getOrder(ratings[0], ratings[1]),
    k = 0,
    sum = order === "equal" ? 1 : 0,
    j = order === "equal" ? 1 : 0;

  while (i < ratings.length) {
    const nextOrder = getOrder(ratings[i - 1], ratings[i]);

    const count = i - j;
    const cumulativeSum = (count * (count + 1)) / 2;
    const latest = order === "asc" ? count : 1;
    const firstAdjustment = order === "desc" ? Math.max(k, count) - count : 0;

    if (order === nextOrder) {
      if (order === "equal") {
        // we reset it every time for equal
        sum += 1;
        j = i;
      }
    } else {
      if (nextOrder === "equal") {
        sum += cumulativeSum + firstAdjustment;
        j = i;
      } else {
        sum += cumulativeSum - latest + firstAdjustment;
        j = i - 1;
      }
      k = count;
      order = nextOrder;
    }

    i++;
  }

  if (order === "equal") {
    sum += 1;
  } else {
    const count = i - j;
    const cumulativeSum = (count * (count + 1)) / 2;
    const firstAdjustment = order === "desc" ? Math.max(k, count) - count : 0;
    sum += cumulativeSum + firstAdjustment;
  }

  return sum;
}

// 2, 3, 2, 1 => [1, 3, 2, 1] => 2*3/2-2
// 1, 2, 3, 2 => [1, 2, 3, 1]
// 1, 2, 3, 2, 1 => [1, 2, 3, 2, 1]

// [1, 0] => i = 2, desc sum = 0, j = 0 => count = 2, sum = 3 => 3
// [1, 1] => i = 2, equal, sum = 1, j = 1 => sum = 2 => 2
// [1, 2] => i = 2, asc, sum = 0, j = 0 => count = 2, sum = 3 => 3

// [2, 1, 0] => i = 2, order = desc, k = 2, sum = 0, j = 0
// nextOrder = desc, order === nextOrder =>  i = 3
// count = 3 => sum = 6 => 6

// [1, 0, 2] => i = 2, desc sum = 0, j = 0
// nextOrder = asc, order != nextOrder => count = 1, sum = 1, j = 1, order = asc, i = 3
// count = 2 => sum = 4

// 1. [2, 1, 0] => [3, 2, 1] => 6
// 2. [1, 2, 0] => [1, 2, 1] => 4
// 3. [1, 0, 2] => [2, 1, 2] => 5
// 4. [0, 1, 2] => [1, 2, 3] => 6
// 5. [0, 2, 1] => [1, 2, 1] => 4

// 1. [1, 1, 1] => [1, 1, 1] => 3
// 2. [1, 2, 2, 2] => [1, 2, 1, 1]
// 3. [2, 2, 2, 1, 0] => [1, 1, 3, 2, 1]

// 4, 5, 6, 5, 4, 3, 2, 1 => 2, 3, 4, 3, 2, 1
// asc = 3
// desc = 6
// 1 + 2 + 3 - 3 = 3
// 6 * 7 / 2 = 21

// 1, 2, 3, 4, 3 => [1, 2, 3, 4, 1] => 11
