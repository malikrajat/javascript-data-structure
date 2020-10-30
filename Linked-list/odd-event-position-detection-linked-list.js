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

const detectOddEvenLinkedList = () => {
	let o = a.head;
	let e = a.head.next;
	e.prev = null;
	while (e && e.next) {
		o.next = e.next;
		e.next ? (e.next.prev = o) : null;
		o = o.next;
		e.next = o ? o.next : null;
		o.next.prev = e;
		e = e.next;
	}
	console.log(o, e);
};

detectOddEvenLinkedList();
