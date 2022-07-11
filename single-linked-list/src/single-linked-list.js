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

  get head() {
    return this._head;
  }
}

module.exports = SingleLinkedList;

const singleLinkedList = new SingleLinkedList();

singleLinkedList.insert(1000);
singleLinkedList.insert(2000);
singleLinkedList.insert(3000);
