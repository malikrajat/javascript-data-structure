// Find the "Kth" max and min element of an array
let a = [22, 44, 36, 67, 63, 77, 33, 72];
let min;
let max;

// first of all sort the array

// a.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	}
// 	if (a < b) {
// 		return -1;
// 	}
// 	return 0;
// });

// console.log(a);

// second way to sort the array
for (let index = 0; index < a.length; index++) {
	for (let j = index + 1; j < a.length; j++) {
		if (a[index] > a[j]) {
			let swap = a[index];
			a[index] = a[j];
			a[j] = swap;
		}
	}
}
console.log(a);
console.log(a[1]);
console.log(a[a.length - 2]);
