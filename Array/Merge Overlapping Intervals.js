// Merge Overlapping Intervals
class MergeOverlapIntervals {
	sortedArray = [];
	constructor(a) {
		this.a = a;
	}
	sortArray() {
		this.a.sort((a, b) => {
			// if (a[0] > b[0]) return 1;
			// if (a[0] < b[0]) return -1;
			// return 0;
			// return a[0] - b[0];
			if (a[0] != b[0]) {
				return a[0] - b[0];
			} else {
				a[1] - b[1];
			}
		});
	}
	mergeAgain() {
		this.sortArray();
		for (let i = 0; i < this.a.length; i++) {
			if (i == 0) {
				this.sortedArray.push(this.a[i]);
			} else {
				let lastEle = this.sortedArray.pop();
				if (lastEle) {
					if (lastEle[1] > this.a[i][0]) {
						this.sortedArray.push([
							lastEle[0],
							Math.max(this.a[i][1], lastEle[0]),
						]);
					} else {
						this.sortedArray.push(lastEle);
						this.sortedArray.push(this.a[i]);
					}
				}
			}
		}
		return this.sortedArray;
	}
}
let a = [
	[22, 28],
	[1, 8],
	[25, 27],
	[14, 19],
	[26, 30],
	[5, 12],
];
const inst = new MergeOverlapIntervals(a);
console.log(inst.mergeAgain());
