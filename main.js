"use strict";
class StackNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first)
            return null;
        const temp = this.first;
        if (this.first == this.last) {
            this.size--;
            return temp.value;
        }
    }
}
const stack = new Stack();
console.log(stack.last);
//# sourceMappingURL=main.js.map