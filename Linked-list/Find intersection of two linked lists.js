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
a.addToHeader(3);
a.addToHeader(4);
a.addToHeader(5);
a.addToHeader(6);
a.addToHeader(7);
let b = new LinkedList();
b.addToHeader(8);
b.addToHeader(4);
b.addToHeader(5);
b.addToHeader(6);
b.addToHeader(7);

function findIntersectionPoint(a, b) {
	let FirstLength = 1;
	let SecondLength = 1;
	let Difference = 0;
	while (a.next !== null) {
		FirstLength += 1;
		a = a.next;
	}
	while (b.next !== null) {
		SecondLength += 1;
		b = b.next;
	}
	Difference = FirstLength - SecondLength;
	if (FirstLength > SecondLength) {
		traverseToFind(a, Difference, b);
	} else {
		traverseToFind(b, Difference, a);
	}
}
function traverseToFind(list, Difference, secondList) {
	let count = 1;
	while (count <= Difference) {
		list = list.prev;
		count += 1;
	}
	while (list.value !== secondList.value) {
		list = list.prev;
		secondList = secondList.prev;
	}
	console.log(list.value);
}
findIntersectionPoint(a.head, b.head);
