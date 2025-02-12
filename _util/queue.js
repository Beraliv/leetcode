/**
 * @template T
 */
class QueueItem {
  /**
   *
   * @param {T} value
   * @param {QueueItem<T> | null} next
   */
  constructor(value, next = null) {
    /**
     * @public
     * @type {T}
     */
    this.value = value;
    /**
     * @public
     * @type {QueueItem<T> | null}
     */
    this.next = next;
  }
}

/**
 * @template T
 */
export class Queue {
  /**
   * @private
   * @type {QueueItem<T> | null}
   */
  first = null;
  /**
   * @private
   * @type {QueueItem<T> | null}
   */
  last = null;

  /**
   *
   * @param {T} value
   * @returns {void}
   */
  enqueue(value) {
    const item = new QueueItem(value);

    if (this.first === null && this.last === null) {
      this.first = item;
      this.last = item;
    } else {
      // @ts-expect-error
      this.last.next = item;
      this.last = item;
    }
  }

  /**
   *
   * @returns {T | null}
   */
  dequeue() {
    if (this.first === null) {
      return null;
    }

    const value = this.first.value;
    this.first = this.first.next;
    return value;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.first === null;
  }
}
