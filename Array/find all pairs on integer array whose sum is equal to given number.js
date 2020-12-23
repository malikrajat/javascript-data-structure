// find all pairs on integer array whose sum is equal to given number
// in other word it is 2 sum problem
class Sum {
	constructor(arr, sum) {
		this.a = arr;
		this.sum = sum;
	}
	findSum() {
		let result = [];
		for (let i = 0; i < this.a.length; i++) {
			for (let j = 0; j < this.a.length; j++) {
				if (i !== j) {
					let firstValue = this.a[i];
					let secondValue = this.a[j];
					if (firstValue + secondValue === this.sum) {
						result.push([firstValue, secondValue]);
					}
				}
			}
		}
		return result;
	}
}
let a = [6, 12, 6, 9, 13, 17, 8];
let sumInst = new Sum(a, 20);
console.log(sumInst.findSum());
