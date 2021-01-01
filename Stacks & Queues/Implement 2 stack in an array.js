// Implement 2 stack in an array
function Stack(n) {
	this.a = [];
	this.counter = n;
	this.top1 = -1;
	this.top2 = this.counter;
}
Stack.prototype.push1 = function (ele) {
	if (this.top1 < this.top2 - 1) {
		this.a[++this.top1] = ele;
	} else {
		return false;
	}
};
Stack.prototype.push2 = function (ele) {
	if (this.top1 < this.top2 - 1) {
		this.a[--this.top2] = ele;
	} else {
		return false;
	}
};
Stack.prototype.pop1 = function (ele) {
	if (this.top1 >= 0) {
		let elem = this.a[this.top1];
		this.top1--;
		return elem;
	} else {
		return false;
	}
};
Stack.prototype.pop2 = function (ele) {
	if (this.top2 < this.counter) {
		let elm = this.a[this.top2];
		this.top2++;
		return elm;
	} else {
		return false;
	}
};

let stack = new Stack();
stack.push1(11);
stack.push2(12);
stack.push1(15);
stack.push2(19);
stack.push1(89);
stack.pop2();
stack.pop1();
