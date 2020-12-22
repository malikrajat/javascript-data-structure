// find Largest sum contiguous Subarray
let a = [12, 34, 56, 22, 45, 11, 67, 35, -98];

class LargerSumArray {
	a = [];
	constructor(arr) {
		this.a = arr;
	}
	findSum() {
		let sum = this.a.length - 1;
		let max = 0;
		let min = 0;
		for (let i = 0; i <= sum; i++) {
			let start = i;
			let end = sum - i;
			if (start === end) break;
			let addition = this.a[start] + this.a[end];
			let difference = this.a[start] - this.a[end];
			if (addition > max) max = addition;
			if (difference < min) min = difference;
		}
		return [max, min];
	}
}

let classInst = new LargerSumArray(a);
let callIns = classInst.findSum();
console.log(callIns);
