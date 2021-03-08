// Minimum no. of Jumps to reach end of an array
let a = [2, 1, 3, 2, 3, 4, 5, 1, 2, 8];
let b = new Array(10).fill(Infinity);
let c = new Array(10);
for (let i = 0; i < a.length; i++) {
	if (a.length <= 1) return 0;
	if (i == 0) a[i] = b[i] = 0;
	for (let j = 0; j < array.length; j++) {
		if (i === j) break;
		if (i <= j + a[j]) {
			b[i] = Math.min(b[i], b[j]);
		}
	}
}
