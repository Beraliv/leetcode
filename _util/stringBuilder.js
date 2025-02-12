export class StringBuilder {
  constructor() {
    /**
     * @public
     * @type {string[]}
     */
    this.characters = [];
  }

  /**
   * @param {string} ch
   * @returns {void}
   */
  append(ch) {
    this.characters.push(ch);
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.characters.join("");
  }
}
