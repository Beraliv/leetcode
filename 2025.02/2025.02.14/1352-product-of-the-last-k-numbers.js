var ProductOfNumbers = function () {
  // Solution 1: Elements array + O(1) Add + O(K) Product Calculation ad hoc
  // this.array = [];
  // Solution 2: Prefix + O(N) Add + O(1) Product
  this.prefix = [1];
  // Space: O(N)
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  // Solution 1
  // Time: O(1)
  // this.array.push(num);

  // Solution 2
  // Time: O(N)
  if (num === 0) {
    this.prefix = [1];
  } else {
    this.prefix.push(num * this.prefix.at(-1));
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  // Solution 1
  // Time: O(K)
  // let product = 1;
  // for (let i = this.array.length - 1; i >= this.array.length - k; i--) {
  //   product *= this.array[i];
  // }
  // return product;

  // Solution 2
  // Time: O(1)
  if (k > this.prefix.length - 1) {
    return 0;
  }
  return this.prefix.at(-1) / this.prefix.at(-k - 1);
};

//     1  2  3   4    5
// [1, 1, 2, 6, 24, 120]
// last 2 = 20 = 120 / 6

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

const case1 = new ProductOfNumbers();
for (let i = 1; i <= 5; i++) {
  case1.add(i);
}
console.log(case1.getProduct(2)); // 20

const case2 = new ProductOfNumbers();
for (const v of [3, 0, 2, 5, 4]) {
  case2.add(v);
}
console.log(case2.getProduct(2)); // 20
console.log(case2.getProduct(3)); // 40
console.log(case2.getProduct(4)); // 0
