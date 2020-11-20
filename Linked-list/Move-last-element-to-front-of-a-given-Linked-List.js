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

const moveLastToFirst = () => {
	a.tail.next = a.head;
	a.head.prev = a.tail;
	let temp = a.tail.prev;
	a.tail.prev = null;
	a.head = a.tail;
	a.tail = temp;
	return a.head;
};

console.log(moveLastToFirst());
