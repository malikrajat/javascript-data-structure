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
a.addToHeader(51);
a.addToHeader(42);
a.addToHeader(33);
a.addToHeader(48);
a.addToHeader(61);
a.addToHeader(69);
a.addToHeader(27);

function splitCircularLinkList(list) {
	let SP = list;
	let FP = list;
	while (FP && FP.next) {
		SP = SP.next;
		FP = FP.next.next;
	}
	let b = SP.next;
	b.prev = null;
	SP.next = null;
	let c = SP;
	let d = FP;
	while (SP && SP.prev) {
		SP = SP.prev;
	}
	SP.prev = c;
	c.next = SP;

	while (FP && FP.prev) {
		FP = FP.prev;
	}
	FP.prev = d;
	d.next = FP;

	console.log(FP);
	console.log(SP);
}
splitCircularLinkList(a.head);
