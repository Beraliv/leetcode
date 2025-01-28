// 18m
class MyQueue {
  private popStack: number[] = [];
  private pushStack: number[] = [];

  push(x: number): void {
    this.pushStack.push(x);
  }

  pop(): number {
    if (this.popStack.length === 0) {
      while (this.pushStack.length > 0) {
        const element = this.pushStack.pop()!;
        this.popStack.push(element);
      }
    }

    return this.popStack.pop()!;
  }

  peek(): number {
    if (this.popStack.length === 0) {
      while (this.pushStack.length > 0) {
        const element = this.pushStack.pop()!;
        this.popStack.push(element);
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty(): boolean {
    return this.popStack.length + this.pushStack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
