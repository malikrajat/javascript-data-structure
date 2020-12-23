// Kadane's Algo

class Kadane {
	constructor(a) {
		this.a = a;
	}
	findMaxContinuesSum() {
		// console.time("a");
		if (this.a.length > 0) {
			let maxSoFar = this.a[0];
			let maxEndHere = 0;
			let start = 0;
			let end = 0;
			let s = 0;
			for (let index = 0; index < this.a.length; index++) {
				maxEndHere = maxEndHere + this.a[index];
				if (maxSoFar < maxEndHere) {
					maxSoFar = maxEndHere;
					start = s;
					end = index;
				}
				if (maxEndHere < 0) {
					maxEndHere = 0;
					s = index + 1;
				}
			}
			console.log(start, end);
		}
		// console.timeEnd("a");
	}
}
let a = [1, 2, 3, 4, -3, -5, -6, -3, 7, 3, 7 - 4, -7, -8, 4, 7 - 8, 5 - 9];
const instance = new Kadane(a);
instance.findMaxContinuesSum();
