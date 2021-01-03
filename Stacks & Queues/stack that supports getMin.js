//  Stack that supports getMin
const stackIns = require("./Stack");
const stack = new stackIns.Stack();
stack.push(12);
stack.push(36);
stack.push(66);
stack.push(33);

console.log(stack.getMin());
