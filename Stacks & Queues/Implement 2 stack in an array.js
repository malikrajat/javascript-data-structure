// Implement 2 stack in an array
const stackIns = require("./Stack");
const stack = new stackIns.Stack();
stack.push(11);
stack.push(12);
stack.push(15);
stack.push(19);
stack.push(89);
console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.peek());
console.log(stack.size());
