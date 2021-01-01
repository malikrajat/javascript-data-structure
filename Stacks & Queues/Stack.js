function Stack() {
	this.a = [];
	this.counter = 0;
}
Stack.prototype.push = function (ele) {
	this.a.push(ele);
	this.counter += 1;
	return this.a;
};
Stack.prototype.pop = function (ele) {
	if (this.counter === 0) return -1;
	this.a.splice(this.counter - 1, 1);
	this.counter -= 1;
	return this.a;
};
Stack.prototype.peek = function () {
	if (this.counter === 0) return -1;
	return this.a[this.counter - 1];
};
Stack.prototype.size = function () {
	return this.counter;
};
module.exports = {
	Stack,
};
// module.exports = Stack;