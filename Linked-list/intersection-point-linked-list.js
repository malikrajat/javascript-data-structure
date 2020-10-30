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

let b = new LinkedList();
b.addToHeader(31);
b.addToHeader(32);
b.addToHeader(33);
b.addToHeader(34);

// detectIntersectionPoint
const detectIntersectionPoint = () => {
	b.tail.next = a.tail.prev;
	let current1 = a.head;
	let current2 = b.head;
	let intersectionPoint = false;
	while (current1 || current2) {
		if (current1 == null) {
			current1 = b.head; //  assign linked list b head to current 1
		}
		if (current2 == null) {
			current2 = a.head; //  assign linked list a head to current 2
		}
		if (current2.value === current1.value) {
			intersectionPoint = true;
			return intersectionPoint;
		}
		current1 = current1.next;
		current2 = current2.next;
	}
	return intersectionPoint;
};
detectIntersectionPoint();
console.log(detectIntersectionPoint());
