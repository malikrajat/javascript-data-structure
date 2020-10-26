function LinkedList() {
	this.head = null;
	this.tail = null;
}
function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}
LinkedList.prototype.addToHeader = function (value) {
	let newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;
};

let a = new LinkedList();
a.addToHeader(23);
a.addToHeader(24);
a.addToHeader(25);
a.addToHeader(26);
a.addToHeader(27);
a.addToHeader(28);
a.addToHeader(29);
a.addToHeader(30);

// let SP = a.head;
// let FP = a.head;
// while (FP && FP.next) {
// 	SP = SP.next;
// 	FP = FP.next.next;
// }

// console.log("Middle is", SP.value);
const findMiddle = () => {
	let SP = a.head;
	let FP = a.head;
	while (FP && FP.next) {
		SP = SP.next;
		FP = FP.next.next;
	}

	console.log("Middle is", SP.value);
};
findMiddle();
