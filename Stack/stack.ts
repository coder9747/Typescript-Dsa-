interface StackInterface<T> {
  arr: Array<T>;
  push: (val: T) => void;
  pop: () => void;
  empty: () => boolean;
  size: () => number;
  top: () => T | undefined;
}
class Stack<T> implements StackInterface<T> {
  arr: T[];
  constructor() {
    this.arr = [];
  }
  top() {
    if (this.arr.length === 0) return;
    return this.arr[this.arr.length - 1];
  }
  push(val: T) {
    this.arr.push(val);
  }
  pop() {
    this.arr.pop();
  }
  empty() {
    return this.arr.length === 0;
  }
  size() {
    return this.arr.length;
  }
}

// const myStack = new Stack<number>();

// for (let i = 0; i < 10; ++i) {
//   myStack.push(i + 1);
// }

// for (let i = 0; i < 10; ++i) {
//   const val = myStack.top();
//   myStack.pop();
//   console.log(val);
// }

// const myStack = new Stack<string>();

// const myName = "pratyush";
// for (const c of myName) {
//   myStack.push(c);
// }

// while (!myStack.empty()) {
//     const frontVal = myStack.top();myStack.pop();
//     console.log(frontVal);
// }
