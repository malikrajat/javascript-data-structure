function LinkedList() {
	this.head = null;
}
function Node(value, next) {
	this.value = value;
	this.next = next;
}
LinkedList.prototype.addToHeader = function (value) {
	let newNode = new Node(value, this.head, null);
	this.head = newNode;
};

let a = new LinkedList();
a.addToHeader(2);
a.addToHeader(4);
a.addToHeader(5);

const detectOddEvenLinkedList = (list) => {
	if (list === null) return null;
	let o = list;
	let e = list.next;
	let eHead = e;
	while (e && e.next) {
		o.next = e.next;
		o = o.next;
		e.next = o.next;
		e = e.next;
	}
	o.next = eHead;
	return list;
};
console.log(detectOddEvenLinkedList(a.head));
