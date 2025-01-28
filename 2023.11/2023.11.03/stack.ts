export {};

class StackNode<T> {
  public value: T;
  public next: StackNode<T> | null;

  constructor(value: T, next: StackNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack<T> {
  private top: StackNode<T> | null = null;

  peek(): T | null {
    if (this.top === null) {
      return null;
    }

    return this.top.value;
  }

  pop(): T | null {
    if (this.top === null) {
      return null;
    }

    const top = this.top;
    this.top = this.top.next;
    return top.value;
  }

  push(value: T): void {
    this.top = new StackNode(value, this.top);
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
