class RandomizedSet {
  /**
   * This map stores numbers.
   * The key is the number that was added with `insert`
   * The value is number of times it was returned with `getRandom`
   */
  private array: number[] = [];
  private object: Record<number, number> = {};

  constructor() {}

  insert(value: number): boolean {
    // O(1)
    if (typeof this.object[value] !== "undefined") {
      return false;
    }

    this.array.push(value);
    this.object[value] = this.array.length - 1;
    return true;
  }

  remove(value: number): boolean {
    // O(1)
    if (typeof this.object[value] !== "undefined") {
      const valueIndex = this.object[value];
      const lastValue = this.array[this.array.length - 1];

      this.array[valueIndex] = lastValue;
      this.array.length = this.array.length - 1;

      this.object[lastValue] = valueIndex;
      delete this.object[value];

      return true;
    }

    return false;
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.array.length);
    return this.array[index];
  }
}

// init => object = {}, array = []
// insert 1 => object = {1: 0}, array = [1] => return true
// remove 2 => return false
// insert 2 => object = {1: 0, 2: 1}, array = [1, 2] => return true
// getRandom => 1 | 2
// remove 1 => valueIndex = 0, lastValue = 2, object = {2: 0}, array = [2] => return true
// insert 2 => return false
// getRandom => 2
