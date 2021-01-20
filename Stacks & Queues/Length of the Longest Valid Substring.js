// Length of the Longest Valid Substring
let a = "()(())(";
const brackets = {
	"{": "}",
	"[": "]",
	"(": ")",
};
let substringLength = 0;
let que = [];
for (const i of a) {
	if (Object.keys(brackets).includes(i)) {
		que.push(i);
	} else {
		if (que.length > 0) {
			for (const b of que) {
				let lastValue = que.pop();
				if (brackets[lastValue] === i) {
					substringLength += 2;
					break;
				}
			}
		}
	}
}
console.log(substringLength);
