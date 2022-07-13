class SingleLinkedListNode {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class SingleLinkedList {
  constructor() {
    this._head = new SingleLinkedListNode();
    this._tail = null;
  }

  insert(value) {
    const newNode = new SingleLinkedListNode(value);
    const isFirstInsert = this._head.next === null && this._tail === null;

    if (isFirstInsert) {
      this._head = newNode;
    } else {
      this._tail.next = newNode;
    }

    this._tail = newNode;
  }

  removeTail() {
    let currentNode = this._head;

    while (currentNode.next !== this._tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this._tail = currentNode;
  }

  isHead(node) {
    return node === this._head;
  }

  isTail(node) {
    return node === this._tail;
  }

  contains(value) {
    let currentNode = this._head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return !!currentNode && currentNode.value === value;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }
}

module.exports = SingleLinkedList;
