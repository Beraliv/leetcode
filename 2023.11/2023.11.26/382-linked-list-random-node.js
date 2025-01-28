/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let index = 0;
  let value = -1;

  let node = this.head;
  while (node !== null) {
    index++;

    let randomIndex = Math.floor(Math.random() * index);

    if (randomIndex === index - 1) {
      value = node.val;
    }

    node = node.next;
  }

  return value;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
