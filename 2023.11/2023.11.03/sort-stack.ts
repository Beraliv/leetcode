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

const debug = (stack: Stack<number>): void => {
  const values: number[] = [];
  while (!stack.isEmpty()) {
    values.push(stack.pop()!);
  }
  console.log(values.reverse().join(" <= "));
};

// 19m
const sortStack = (stack: Stack<number>): Stack<number> => {
  const comparisonStack = new Stack<number>();

  while (!stack.isEmpty()) {
    const element = stack.pop()!;

    while (
      !comparisonStack.isEmpty() &&
      comparisonStack.peek() !== null &&
      comparisonStack.peek()! < element
    ) {
      const smallerElement = comparisonStack.pop()!;
      stack.push(smallerElement);
    }

    comparisonStack.push(element);
  }

  return comparisonStack;
};

// [1,3,2,4]
const stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(4);

debug(sortStack(stack));
