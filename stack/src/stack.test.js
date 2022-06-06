const Stack = require("./stack");

describe("stack", () => {
  it("should create a stack", () => {
    const stack = new Stack();

    expect(typeof stack).toBe("object");
    expect(typeof stack.push).toBe("function");
    expect(typeof stack.pop).toBe("function");
    expect(typeof stack.peek).toBe("function");
  });

  it("should add an item", () => {
    const stack = new Stack();

    stack.push(100);

    expect(stack.peek()).toBe(100);
  });

  it("should add an item always at the end of the stack", () => {
    const stack = new Stack();

    stack.push(100);
    stack.push(0);
    stack.push(90);

    expect(stack.peek()).toBe(90);
  });

  it("should remove an item from the end of the stack", () => {
    const stack = new Stack();

    stack.push(100);
    stack.push(0);
    stack.push(90);

    const removedItem = stack.pop();

    expect(removedItem).toBe(90);
    expect(stack.peek()).toBe(0);
  });
});
