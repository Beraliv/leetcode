class FixedMultiStack {
  count: number = 3;
  capacity: number;
  values: number[];
  sizes: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.values = Array(this.count * capacity).fill(0);
    this.sizes = Array(this.count).fill(0);
  }

  push(stack: number, value: number) {
    if (this.isFull(stack)) {
      throw new Error(`Stack ${stack} is full, cannot add more values`);
    }

    this.sizes[stack]++;
    this.values[this.indexOfTop(stack)] = value;
  }

  pop(stack: number): number {
    if (this.isEmpty(stack)) {
      throw new Error(`Stack ${stack} is empty, cannot pop any values`);
    }

    const topIndex = this.indexOfTop(stack);
    const value = this.values[topIndex];
    this.values[topIndex] = 0;
    this.sizes[stack]--;
    return value;
  }

  indexOfTop(stack: number): number {
    const topIndex = stack * this.capacity;
    const size = this.sizes[stack];
    return topIndex + size - 1;
  }

  isFull(stack: number): boolean {
    return this.sizes[stack] === this.capacity;
  }

  isEmpty(stack: number): boolean {
    return this.sizes[stack] === 0;
  }
}
