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
	let res = this.a.splice(this.counter - 1, 1);
	this.counter -= 1;
	return res;
};
Stack.prototype.peek = function () {
	if (this.counter === 0) return -1;
	return this.a[this.counter - 1];
};
Stack.prototype.size = function () {
	return this.counter;
};
Stack.prototype.getByIndex = function (index) {
	if (this.counter < index) return -1;
	return this.a[index];
};
Stack.prototype.getMin = function () {
	if (this.size() <= 0) return false;
	let min = this.a[0];
	for (let index = 0; index < this.a.length; index++) {
		if (min > this.a[index]) {
			min = this.a[index];
		}
	}
	return min;
};
// module.exports = {
// 	Stack,
// };
module.exports = Stack;
