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

LinkedList.prototype.removeFromHeader = function () {
	if (!this.head) {
		return null;
	} else {
		this.head.next.prev = null;
		console.log(this.head.value);
		this.head = this.head.next;
	}
};
a.removeFromHeader();
console.log(a);
