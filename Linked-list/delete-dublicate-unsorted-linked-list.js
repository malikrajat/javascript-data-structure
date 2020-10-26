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

const deleteDuplicateUnSortedLinkedList = () => {
	if (node.next) {
		let nextValue = node.next;
		while (nextValue) {
			if (node.value === nextValue.value) {
				if (!nextValue.next) {
					nextValue.prev.next = null;
					a.tail = nextValue.prev;
				} else {
					nextValue.prev.next = nextValue.next;
					nextValue.next.prev = nextValue.prev;
				}
			}
			nextValue = nextValue.next;
		}
		deleteDuplicateUnSortedLinkedList(node.next);
	}
};
deleteDuplicateUnSortedLinkedList();
console.log(a);
