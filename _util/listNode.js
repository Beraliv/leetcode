/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode} next
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.toString = function () {
  let node = this;
  const results = [];

  while (node !== null) {
    results.push(node.val);
    node = node.next;
  }

  return results.join(" -> ");
};
