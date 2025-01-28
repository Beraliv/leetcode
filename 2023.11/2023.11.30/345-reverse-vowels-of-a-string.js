const isVowel = (ch) => ["a", "e", "i", "o", "u"].includes(ch.toLowerCase());

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const digits = s.split("");

  let left = 0;
  let right = digits.length - 1;

  while (left < right) {
    while (left < digits.length && !isVowel(digits[left])) {
      left++;
    }

    while (right >= 0 && !isVowel(digits[right])) {
      right--;
    }

    if (left < right) {
      swap(digits, left++, right--);
    }
  }

  return digits.join("");
};
