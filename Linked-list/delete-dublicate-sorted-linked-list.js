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
a.addToHeader(2);
a.addToHeader(3);
a.addToHeader(3);

const deleteDuplicateInSortedLinkedList = () => {
	let current = a.head;
	while (current && current.next) {
		let next = current.next;
		if (current.value === next.value) {
			current.next = next.next;
			next.next.prev = current;
		} else {
			current = current.next;
		}
	}
};
deleteDuplicateInSortedLinkedList();
console.log(a);
