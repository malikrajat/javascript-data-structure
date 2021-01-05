// The celebrity Problem
function Stack() {
	this.b = [
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
	];
	this.a = [];
	this.counter = 0;
}
Stack.prototype.push = function (ele) {
	this.a.push(ele);
	this.counter += 1;
	return ele;
};
Stack.prototype.pop = function (ele) {
	if (this.counter === 0) return -1;
	let a = this.a.splice(this.counter - 1, 1);
	this.counter -= 1;
	return a;
};
Stack.prototype.size = function () {
	return this.counter;
};
Stack.prototype.sizeStack = function () {
	return this.b.length;
};
function Celebrity() {
	Stack.call(this);
}
Celebrity.prototype = Object.create(Stack.prototype);
Celebrity.prototype.constructor = Celebrity;
Celebrity.prototype.findCeleb = function () {
	// get total number in stack
	for (let i = 0; i < this.sizeStack(); i++) {
		this.push(i);
	}
	let i = 0;
	while (this.size() > 1) {
		let first = this.pop()[0];
		let second = this.pop()[0];
		if (this.b[first][second] == 1) {
			this.push(second);
		} else {
			this.push(first);
		}
	}
	let yes = true;
	let stack = this.pop()[0];
	for (let i = 0; i < this.sizeStack(); i++) {
		if (i !== stack) {
			if (this.b[stack][i] !== 0) {
				yes = false;
			}
			if (this.b[i][stack] !== 1) {
				yes = false;
			}
		}
	}
	if (yes) {
		console.log(stack);
	} else {
		console.log("No, There is no celeb");
	}
};
const inst = new Celebrity();
inst.findCeleb();
