// Find the Union and Intersection of the two sorted arrays.
let a = [12, 34, 43, 67, 74, 33, 67, 245, 65, 223];
let b = [24, 13, 43, 2, 45, 11, 46, 64, 444, 67, 24, 236, 64, 55];

// union for 2 Array

// for (const element of b) {
// 	let find = null;
// 	a.find((val) => {
// 		if (val === element) {
// 			find = 1;
// 		}
// 	});
// 	if (find === null) {
// 		a.push(element);
// 	}
// }
// console.log(a);

// Second way to do

// let c = [...new Set([...a, ...b])];
// console.log(c);

// Third way to do
for (const val of a) {
	if (b.indexOf(val) == -1) {
		b.push(val);
	}
}
console.log(b);

let c = [12, 34, 43, 67, 74, 33, 67, 245, 65, 223];
let d = [24, 13, 43, 2, 45, 11, 46, 64, 444, 67, 24, 236, 64, 55];

// intersection Array
const e = [];
for (const val of c) {
	if (d.indexOf(val) !== -1) {
		e.push(val);
	}
	// console.log(val, "------", b.indexOf(val));
}
console.log(e);
