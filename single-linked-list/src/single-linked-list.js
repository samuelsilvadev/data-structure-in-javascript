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

  remove(value) {
    let currentNode = this._head;

    if (currentNode.value === undefined) {
      return;
    }

    if (currentNode.value === value) {
      const nodeAfterHead = currentNode.next;

      this._head = nodeAfterHead;

      return;
    }

    while (
      currentNode &&
      currentNode.next &&
      currentNode.next.value !== value
    ) {
      currentNode = currentNode.next;
    }

    const nodeAfterNext = currentNode.next.next;
    const nextNode = currentNode.next;

    if (this.isTail(nextNode)) {
      this._tail = currentNode;
    }

    currentNode.next = nodeAfterNext;

    this._removeReferenceOfNode(nextNode);
  }

  _removeReferenceOfNode(node) {
    node.next = null;
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
