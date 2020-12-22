// find Largest sum contiguous Subarray
let a = [12, 34, 56, 22, 45, 11, 55, 67, 35, -98];

class LargerSumArray {
	a = [];
	constructor(arr) {
		// super();
		this.a = arr;
	}
	findSum() {
		let sum = 0;
		for (const iterator of this.a) {
			sum += iterator;
		}
		return sum;
	}
}
let classInst = new LargerSumArray(a);
let sum = classInst.findSum();
console.log(
	"🚀 ~ file: find Largest sum contiguous Subarray.js ~ line 22 ~ sum",
	sum
);
