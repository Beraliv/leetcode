// insert => Map, Set, Array to the end
// remove => Map, Set, Array from the end
// getRandom => Array

var RandomizedCollection = function () {
  // Map<key: number, value: Set<index: number>>
  this.indexMap = new Map();
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const index = this.values.length;
  this.values.push(val);

  const isPresent = this.indexMap.has(val);
  const indexSet = this.indexMap.get(val) || new Set();
  indexSet.add(index);
  this.indexMap.set(val, indexSet);

  return !isPresent;
};

// O(1) time
const getFirstSetValue = (set) => set[Symbol.iterator]().next().value;

/**
 * O(1) time
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.indexMap.has(val)) {
    return false;
  }

  const indexSet = this.indexMap.get(val);
  const index = getFirstSetValue(indexSet);
  indexSet.delete(index);

  if (indexSet.size === 0) {
    this.indexMap.delete(val);
  } else {
    this.indexMap.set(val, indexSet);
  }

  if (index === this.values.length - 1) {
    this.values.pop();
  } else {
    const lastValue = this.values.pop();
    this.values[index] = lastValue;

    const lastValueIndexSet = this.indexMap.get(lastValue);
    lastValueIndexSet.delete(this.values.length);
    lastValueIndexSet.add(index);
    this.indexMap.set(lastValue, lastValueIndexSet);
  }

  return true;
};

/**
 * O(1) time
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.values.length);

  return this.values[index];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
