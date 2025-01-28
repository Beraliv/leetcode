export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const debug = (head: ListNode): void => {
  const list: number[] = [];
  let node: ListNode | null = head;
  while (node !== null) {
    list.push(node.val);
    node = node.next;
  }
  console.log(list.join(" => "));
};

function revertInPlace(head: ListNode): ListNode | null {
  let newHead: ListNode | null = null;
  let node: ListNode | null = head;
  while (node !== null) {
    const nextNode: ListNode | null = node.next;
    node.next = newHead;
    newHead = node;
    node = nextNode;
  }
  return newHead;
}

const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const dummy = new ListNode(-1);
dummy.next = list;
debug(dummy);
dummy.next = revertInPlace(list);
debug(dummy);
