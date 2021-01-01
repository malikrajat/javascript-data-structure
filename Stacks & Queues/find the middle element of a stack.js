// find the middle element of a stack
const stackIns = require("./Stack");
const stack = new stackIns.Stack();
stack.push(12);
stack.push(36);
stack.push(66);
stack.push(33);
let middle = Math.floor(stack.size() / 2);
console.log(stack.getByIndex(middle));
