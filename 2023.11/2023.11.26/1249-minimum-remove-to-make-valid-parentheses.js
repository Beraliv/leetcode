/**
 * 19min
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // O(S) time and O(S) space

  // 1. stack: all characters - O(S) space
  const stack = [];
  let count = 0;

  // 2. iterate over ch in s - O(S) time
  for (const ch of s) {
    // 2.2. Open bracket ( => put into stack and increase count
    if (ch === "(") {
      stack.push(ch);
      count++;
    }
    // 2.3. Closing bracket )
    else if (ch === ")") {
      // 2.3.1. count > 0 => we put it into stack
      if (count > 0) {
        count--;
        stack.push(ch);
      }
      // 2.3.2. count === 0 => don't add to stack
    }
    // 2.1. English ch => put into stack
    else {
      stack.push(ch);
    }
  }
  // 3. count > 0, O(S) time, O(S) space
  if (count > 0) {
    // 3.1. create temporary stack, put all characters into another stack until count of ( is found and is 0
    const temporaryStack = [];
    let temporaryCount = 0;
    while (count > 0) {
      const ch = stack.pop();

      if (ch === ")") {
        temporaryCount++;
        temporaryStack.push(ch);
      } else if (ch === "(") {
        if (temporaryCount > 0) {
          temporaryCount--;
          temporaryStack.push(ch);
        }
        // 3.1.1. remove ( from stack and reduce count by 1
        else {
          // don't add it
          count--;
        }
      } else {
        temporaryStack.push(ch);
      }
    }

    // 3.2. put elements of temporary stack into original
    while (temporaryStack.length > 0) {
      stack.push(temporaryStack.pop());
    }
  }

  // O(S) time and space
  // 4. return stringified answer of stack
  // TODO: put it into array => reversed order
  // TODO 2: reverse in place
  return stack.join("");
};

// leet(c(ode)
// leetc(ode)

// a((b)
// stack = [a, (, b, )], count = 0
// temporaryStack = [], temporaryCount = 0
// a(b)
