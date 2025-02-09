// 15m - 2 solutions
function merge(as, m, bs, n) {
  // 1. create array
  // 2. two pointers iteration
  // Time: O(M + N)
  // Space: O(1)

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (as[i] > bs[j]) {
      as[k--] = as[i--];
    } else if (as[i] < bs[j]) {
      as[k--] = bs[j--];
    } else {
      as[k--] = as[i--];
      as[k--] = bs[j--];
    }
  }
  while (j >= 0) {
    as[k--] = bs[j--];
  }
  // while (i < m && j < n) {
  //     if (as[i] < bs[j]) {
  //         arr[k++] = as[i++]
  //     } else if (as[i] > bs[j]) {
  //         arr[k++] = bs[j++]
  //     } else {
  //         arr[k++] = as[i++];
  //         arr[k++] = bs[j++];
  //     }
  // }
  // // 3. when finished, check both as and bs for elements left, append them to the end
  // while (i < m) {
  //     arr[k++] = as[i++]
  // }
  // while (j < n) {
  //     arr[k++] = bs[j++];
  // }
  // // 4. return an array
  // for (let i = 0; i < arr.length; i++) {
  //     as[i] = arr[i];
  // }
}

// [1, 3, 5, 0, 0]
// [2, 4]

// [1, 2, 3, 4, 5]
// i = 1, j = 2
