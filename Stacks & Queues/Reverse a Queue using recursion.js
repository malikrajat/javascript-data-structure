// Reverse a Queue using recursion
const StackIns = require("./Stack");
const ins = new StackIns();

function Reverse() {
	let b = [1, 2, 3, 4, 5];
	for (const i of b) {
		ins.push(i);
	}
	b.length = 0;
	for (let i = 0; i <= ins.size() - 1; i++) {
		let a = ins.a.pop();
		b.push(a);
	}
	console.log(b);
}

Reverse();
