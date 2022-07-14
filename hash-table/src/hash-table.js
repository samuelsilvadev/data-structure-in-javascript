class HashTable {
  constructor() {
    this._storage = [];
    this._sizeOfStorage = 25;
  }

  insert({ key, value } = {}) {
    const indexToInsert = this._hash(key);

    if (!this._storage[indexToInsert]) {
      this._storage[indexToInsert] = [];
    }

    if (this._isKeyDuplicate(key, this._storage[indexToInsert])) {
      const duplicatedIndex = this._findIndexOfDuplicatedKey(
        key,
        this._storage[indexToInsert]
      );

      this._storage[indexToInsert][duplicatedIndex][1] = value;
    } else {
      this._storage[indexToInsert].push([key, value]);
    }
  }

  _isKeyDuplicate(key, list) {
    for (let index = 0; index < list.length; index++) {
      const listKey = list[index][0];

      if (listKey === key) {
        return true;
      }
    }

    return false;
  }

  _findIndexOfDuplicatedKey(key, list) {
    return list.findIndex(([listKey]) => listKey === key);
  }

  get(key) {
    const indexToGet = this._hash(key);

    const tupleWithKeyAndValue = this._storage[indexToGet].find(
      ([listKey]) => listKey === key
    );
    const value = tupleWithKeyAndValue[1];

    return value;
  }

  remove(key) {}

  /**
   * Hashes string value into an integer that can be mapped to an array index
   *
   * @param {string} key - the string to be hashed
   * @return {number} - an integer between 0 and n
   */
  _hash(key) {
    let sum = 0;

    for (let index = 0; index < key.length; index++) {
      sum += key.charCodeAt(index) * 3;
    }

    return sum % this._sizeOfStorage;
  }
}

const hashTable = new HashTable();

hashTable.insert({ key: "name", value: "samuel" });
hashTable.insert({ key: "name", value: "katty" });
hashTable.insert({ key: "age", value: 18 });

console.log(hashTable.get("name"));

module.exports = HashTable;
