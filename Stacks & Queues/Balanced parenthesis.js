// Balanced parenthesis
class BalancedParenthesisCheck {
	obj = {
		"(": ")",
		"{": "}",
		"[": "]",
	};
	stack = [];
	constructor(a) {
		this.stringToCheck = a;
	}
	checkForBalanced() {
		for (const el of this.stringToCheck) {
			if (this.obj.hasOwnProperty(el)) {
				this.stack.push(el);
			} else {
				let consEl = this.stack.pop();
				if (this.obj[consEl] !== el) {
					return false;
				}
			}
		}
		return this.stack.length === 0;
	}
}
let a = "({]})";
const BPIns = new BalancedParenthesisCheck(a);
console.log(BPIns.checkForBalanced());
