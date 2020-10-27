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
a.addToHeader(1);
a.addToHeader(2);
a.addToHeader(4);
a.addToHeader(3);
a.addToHeader(5);

const removeLoop = () => {
	a.tail.next = a.head.next;
	let SP = a.head;
	let FP = a.head;
	// check for SP & FP value to be equal
	while (SP && SP.next) {
		SP = SP.next;
		FP = FP.next.next;
		if (SP.value === FP.value) {
			SP = a.head;
		}
	}
	// *** impotent replace SP with head and increase 1 step by step
	while (SP.next === FP.next) {
		FP.next = null;
	}
	// check for loop again after removing loop
	while (SP && SP.next) {
		SP = SP.next;
		FP = FP.next.next;
		if (SP.value === FP.value) {
			console.log("loop again");
			return false;
		}
	}
};
removeLoop();
