class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const debug = (head: ListNode) => {
  const values: number[] = [];
  let node: ListNode | null = head;
  while (node !== null) {
    values.push(node.val);
    node = node.next;
  }

  console.log(`ListNode: {${values.join(" => ")}}`);
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  1 => 2 => 3 => 2
// {}
// node = 1, {}
// node = 2, {1: false}
// node = 3, {1: false, 2: false}
// node = 2, {1: false, 2: false, 3: false}
// node = null, {1: false, 2: true, 3: false}
// newHead = 1
// node = 1, node.next.val = 2 => delete 2
// node = 3, node.next.val = 2 => delete 2

function deleteDuplicatesUnsorted(head: ListNode | null): ListNode | null {
  // O(N) time and space
  let hashMap = new Map<number, boolean>();

  if (head === null) {
    return null;
  }

  let node: ListNode | null = head;
  while (node !== null) {
    hashMap.set(node.val, hashMap.has(node.val));
    node = node.next;
  }

  let newHead: ListNode | null = head;
  while (newHead !== null && hashMap.get(newHead.val) === true) {
    newHead = newHead.next;
  }

  if (newHead === null) {
    return null;
  }

  node = newHead;

  while (node.next !== null) {
    if (hashMap.get(node.next.val) === true) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return newHead;

  //   O(N ** 2) time, O(1) space
  //   const artificialHead = new ListNode(-1, head);
  //   let node = artificialHead;

  //   // 1. iterate over nodes
  //   while (node.next !== null) {
  //     let isDuplicated = false;
  //     // 2. Find duplicate in the following nodes
  //     let lookAhead: ListNode | null = node.next;
  //     while (lookAhead.next !== null) {
  //       if (lookAhead.next.val === node.next.val) {
  //         isDuplicated = true;
  //         break;
  //       }
  //       lookAhead = lookAhead.next;
  //     }
  //     // 3. if there is one
  //     if (isDuplicated) {
  //       // 3.1. Iterate over nodes and remove duplicates
  //       let lookAhead: ListNode | null = node.next;
  //       while (lookAhead.next !== null) {
  //         if (lookAhead.next.val === node.next.val) {
  //           lookAhead.next = lookAhead.next.next;
  //         } else {
  //           lookAhead = lookAhead.next;
  //         }
  //       }
  //       // 3.2. Shift current node
  //       node.next = node.next.next;
  //     } else {
  //       // 4. if there is none, go to the next one
  //       node = node.next;
  //     }
  //   }

  //   return artificialHead.next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2))));
debug(head);
const newHead = deleteDuplicatesUnsorted(head)!;
debug(newHead);
