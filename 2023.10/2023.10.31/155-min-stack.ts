class MinStack {
  private values: number[];
  private mins: number[];

  constructor() {
    this.values = [];
    this.mins = [];
  }

  push(val: number): void {
    this.values.push(val);
    this.mins.push(
      this.mins.length === 0
        ? val
        : Math.min(this.mins[this.mins.length - 1], val)
    );
  }

  pop(): void {
    this.values.pop();
    this.mins.pop();
  }

  top(): number {
    return this.values[this.values.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
