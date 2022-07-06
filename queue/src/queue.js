class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(value) {
    this._storage[this._length + this._headIndex] = value;
    this._length++;
  }

  dequeue() {
    const value = this._storage[this._headIndex];

    delete this._storage[this._headIndex];

    this._headIndex++;
    this._length--;

    return value;
  }

  peek() {
    return this._storage[this._headIndex];
  }
}

module.exports = Queue;
