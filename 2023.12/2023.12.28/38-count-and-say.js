const createNewSentence = (arr) => {
  const sentence = [];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      sentence.push(count.toString(), arr[i - 1]);
      count = 1;
    }
  }

  sentence.push(count.toString(), arr[arr.length - 1]);

  return sentence;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let sentence = ["1"];
  let k = 1;

  while (k < n) {
    sentence = createNewSentence(sentence);
    k++;
  }

  return sentence.join("");
};
