function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = new ListNode(-1, -1);
  this.tail = new ListNode(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.nodeMap = new Map();
};

LRUCache.prototype.addNode = function (curr) {
  const prev = this.tail.prev;
  this.tail.prev = curr;
  curr.next = this.tail;
  curr.prev = prev;
  prev.next = curr;

  this.nodeMap.set(curr.key, curr);
};

LRUCache.prototype.deleteNode = function (curr) {
  if (curr.prev !== null) {
    curr.prev.next = curr.next;
  }

  if (curr.next !== null) {
    curr.next.prev = curr.prev;
  }

  this.nodeMap.delete(curr.key);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.nodeMap.has(key)) {
    return -1;
  }

  const node = this.nodeMap.get(key);
  this.deleteNode(node);
  this.addNode(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.nodeMap.has(key)) {
    this.deleteNode(this.nodeMap.get(key));
  }
  this.addNode(new ListNode(key, value));

  if (this.nodeMap.size > this.capacity) {
    const node = this.head.next;
    this.deleteNode(node);
  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// map: {2: Node(2, 2), 1: Node(1, 1), 3: Node(3, 3)}
//  dummy => Node(3, 3) => Node(1, 1) => Node(2, 2)
// get: Node(1, 1) => 1
