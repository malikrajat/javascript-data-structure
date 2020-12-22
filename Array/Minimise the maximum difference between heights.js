// Minimise the maximum difference between heights
/*
Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer.
Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output: 5
Explanation: The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.
*/

let a = [12, 34, 56, 22, 45, 11, 67, 35, 98];

class MinMaxDiff {
	constructor(arr, k) {
		this.a = arr;
		this.k = k;
	}
	modifyArray() {
		let max = 0,
			min = 0;
		this.a.map((element) => {
			let diff = element - this.k;
			if (diff <= this.k) {
				element += this.k;
			} else {
				element -= this.k;
			}
			if (element > max) max = element;
			if (min === 0) min = element;
			if (element < min) min = element;
		});
		return max - min;
	}
}

let classInst = new MinMaxDiff(a, 10);
let callIns = classInst.modifyArray();
console.log(callIns);
