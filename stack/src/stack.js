class Stack {
  constructor() {
    this._length = 0;
    this._storage = {};
  }

  /**
   * Adds a new value at the end of the stack.
   *
   * @param {*} value to be saved
   */
  push(value) {
    this._storage[this._length] = value;
    this._length++;
  }

  /**
   * Remove the value from the end of the stack.
   *
   * @returns {*} the last and newest value from the stack
   */
  pop() {
    const length = this._length - 1;
    const lastElement = this._storage[length];

    delete this._storage[length];

    this._length--;

    return lastElement;
  }

  /**
   * Returns the value at the end of the stack without
   * removing in it.
   *
   * @returns {*} the last and newest value from the stack
   */
  peek() {
    return this._storage[this._length - 1];
  }
}

module.exports = Stack;
