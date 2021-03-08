function LinkedList() {
	this.head = null;
}
function Node(value, next) {
	this.value = value;
	this.next = next;
}
LinkedList.prototype.addToHeader = function (value) {
	let s = new Node(value, this.head);
	this.head = s;
};
let f = new LinkedList();
f.addToHeader(1);
f.addToHeader(3);
f.addToHeader(5);
f.addToHeader(0);
f.addToHeader(5);
f.addToHeader(15);
f.addToHeader(25);

function reverseLinkedListWithGroup(list, limit = 4) {
	if (list === null) return null;
}
reverseLinkedListWithGroup(f.head);
