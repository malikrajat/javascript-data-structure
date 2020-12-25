function msort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				var swap = arr[i];
				arr[i] = arr[j];
				arr[j] = swap;
			}
		}
	}
	return arr;
}
let a = [2, 6, 5, 9, 8, 6, 1];
console.log(msort(a));
