const HashTable = require("./hash-table");

describe("hash table", () => {
  it("should create a hash table", () => {
    const hashTable = new HashTable();

    expect(typeof hashTable).toBe("object");
    expect(typeof hashTable.insert).toBe("function");
    expect(typeof hashTable.get).toBe("function");
    expect(typeof hashTable.remove).toBe("function");
  });

  it("should add an item", () => {
    const hashTable = new HashTable();

    hashTable.insert({ key: "name", value: "a random name" });

    expect(hashTable.get("name")).toBe("a random name");
  });

  it("should add multiple items", () => {
    const hashTable = new HashTable();

    hashTable.insert({ key: "name", value: "a random name" });
    hashTable.insert({ key: "age", value: 20 });

    expect(hashTable.get("name")).toBe("a random name");
    expect(hashTable.get("age")).toBe(20);
  });

  it("should override if try to insert item with the same key", () => {
    const hashTable = new HashTable();

    hashTable.insert({ key: "name", value: "a random name" });
    hashTable.insert({ key: "name", value: "overridden name" });

    expect(hashTable.get("name")).toBe("overridden name");
  });
});
