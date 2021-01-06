// Evaluation of Postfix expression
const stackIns = require("./Stack");
const ins = new stackIns();
function PostFix(strs) {
	stackIns(this);
	let str = strs.split(",");
	for (let i = 0; i < str.length; i++) {
		let ele = str[i];
		if (ele !== ",") {
			if (!isNaN(ele)) {
				ins.push(ele);
			} else {
				let first = +ins.pop()[0];
				let second = +ins.pop()[0];
				let res;
				if (first > second) {
					res = eval("" + first + ele + second);
				} else {
					res = eval("" + second + ele + first);
				}
				ins.push(res);
			}
		}
	}
	return ins.a;
}
console.log(PostFix("5,6,2,+,*,12,4,/,-"));
