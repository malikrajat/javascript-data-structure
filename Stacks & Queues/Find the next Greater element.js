// Find the next Greater element
const StackIns = require("./Stack");
/*
class ExtraStack extends StackIns {
	constructor() {
		super();
	}
	makeStack() {
		super.push(12);
		super.push(36);
		super.push(66);
		super.push(33);
	}
	findNextGrater() {
		this.makeStack();
		let newStack = [];
		for (let index = 0; index < this.a.length; index++) {
			let max;
			for (let i = 0; i < this.a.length; i++) {
				if (this.a[index] < this.a[i]) {
					max = this.a[i];
					break;
				}
				if (index === this.a.length) {
					max = -1;
				}
			}
			newStack.push(max);
		}
	}
}
const inst = new ExtraStack().findNextGrater();
console.log(inst);
*/

function FindNextGrater() {
	StackIns.call(this);
	this.result = [];
}
FindNextGrater.prototype = Object.create(StackIns.prototype);
FindNextGrater.prototype.nextGrater = function () {
	for (let index = 0; index < this.size(); index++) {
		let max;
		for (let i = index + 1; i < this.size(); i++) {
			if (this.a[index] < this.a[i]) {
				max = this.a[i];
				break;
			}
		}
		if (index + 1 === this.size()) {
			max = -1;
		}
		this.result.push(max);
	}
	return this.result;
};
const inst = new FindNextGrater();
inst.push(2);
inst.push(12);
inst.push(16);
inst.push(10);
inst.push(19);
console.log(inst.nextGrater());
