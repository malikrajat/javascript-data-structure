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

// delete middle node
const deleteMiddle = () => {
	let node = SP;
	SP.prev.next = node.next;
	SP.next.prev = node.prev;

	console.log("now list is ", a);
};
deleteMiddle();
