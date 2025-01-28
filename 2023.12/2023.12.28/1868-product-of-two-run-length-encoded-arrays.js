/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  const encoded = [];

  let i = 0,
    j = 0;
  let fr1 = 0,
    fr2 = 0;

  while (i < encoded1.length && j < encoded2.length) {
    if (fr1 === 0) {
      fr1 = encoded1[i][1];
    }
    if (fr2 === 0) {
      fr2 = encoded2[j][1];
    }

    const value = encoded1[i][0] * encoded2[j][0];
    const freq = Math.min(fr1, fr2);
    if (encoded.length > 0 && encoded[encoded.length - 1][0] === value) {
      encoded[encoded.length - 1][1] += freq;
    } else {
      encoded.push([value, freq]);
    }
    fr1 -= freq;
    fr2 -= freq;
    if (fr1 === 0) {
      i++;
    }
    if (fr2 === 0) {
      j++;
    }
  }

  return encoded;
};

// encoded1 = [[5, 3], [3, 2], [2, 1]]
// encoded2 = [[2, 1], [3, 2], [5, 3]]

// encoded = [[10, 1], [15, 2], [15, 2], [10, 1]]
// encoded = [[10, 1], [15, 4], [10, 1]]
