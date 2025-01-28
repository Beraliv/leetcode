class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// 1h for 2 solutions
class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    // Node
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    // Map<Key, Node>
    this.map = new Map();
    this.capacity = capacity;
  }

  #addNode(node) {
    const previouslyFirst = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = previouslyFirst;
    previouslyFirst.prev = node;
    this.map.set(node.key, node);
  }

  #deleteNode(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    this.map.delete(node.key);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this.#deleteNode(node);
    this.#addNode(node);
    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.#deleteNode(node);
    }
    this.#addNode(new Node(key, value));

    if (this.map.size > this.capacity) {
      const node = this.tail.prev;
      this.#deleteNode(node);
    }
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// map: {2: Node(2, 2), 1: Node(1, 1), 3: Node(3, 3)}
//  dummy => Node(3, 3) => Node(1, 1) => Node(2, 2)
// get: Node(1, 1) => 1
