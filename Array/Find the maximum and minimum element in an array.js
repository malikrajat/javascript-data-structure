// Find the maximum and minimum element in an array
let a = [22, 44, 63, 67, 63, 77, 33, 72];
let min;
let max;

for (const i in a) {
	if (i == 0) {
		min = a[i];
		max = a[i];
	} else if (a[i] < min) {
		min = a[i];
	} else if (a[i] > max) {
		max = a[i];
	}
}
console.log(min);
console.log(max);

// There is a in build method as well

console.log(Math.min(...a));
console.log(Math.max(...a));
