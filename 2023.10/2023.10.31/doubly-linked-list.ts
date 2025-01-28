export {};

class Node<Value> {
  public value: Value;
  public next: Node<Value> | null;

  constructor(value: Value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList<Value> {
  public name = "DoublyLinkedList";
  public head: Node<Value> | null = null;
  public last: Node<Value> | null = null;

  public append(value: Value) {
    if (!this.head && !this.last) {
      this.head = new Node(value);
      this.last = this.head;
      return;
    }

    this.last!.next = new Node(value);
    this.last! = this.last!.next;
  }

  public delete(value: Value): Node<Value> | null {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      const deletedHead = this.head;
      this.head = this.head.next;
      return deletedHead;
    }

    let node = this.head;
    while (node.next !== null && node.next.value !== value) {
      node = node.next;
    }

    if (node.next !== null && node.next.value === value) {
      const deletedNode = node.next;
      node.next = node.next.next;
      return deletedNode;
    }

    return null;
  }

  public debug() {
    const values: Value[] = [];

    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }

    console.log(`${DoublyLinkedList.name}: {${values.join(" => ")}}`);
  }
}

const linkedList = new DoublyLinkedList<number>();
linkedList.debug();
linkedList.append(1);
linkedList.debug();
linkedList.append(2);
linkedList.debug();
linkedList.append(3);
linkedList.debug();
linkedList.delete(2);
linkedList.debug();
