var TimeMap = function () {
  // Time: O(1)
  // Space: O(N)

  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // Time: O(1)
  // Space: O(1)

  console.log(`>>> set(${key}, ${value}) for t=${timestamp}`);

  if (!this.map.has(key)) {
    this.map.set(key, []);
  }

  this.map.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  // Time: O(logN)
  // Space: O(1)

  if (!this.map.has(key)) {
    return "";
  }

  const entries = this.map.get(key);

  let start = 0,
    end = entries.length;
  while (start < end) {
    const middle = (start + end) >> 1;
    const pivot = entries[middle][0];

    if (pivot > timestamp) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  if (start > 0) {
    return entries[start - 1][1];
  }

  return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(`>>> get("foo", 1) = "${timeMap.get("foo", 1)}"`);
console.log(`>>> get("foo", 2) = "${timeMap.get("foo", 2)}"`);
