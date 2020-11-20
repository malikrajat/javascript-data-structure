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

const loopDetection = () => {
	a.tail.next = a.head.next;
	let SP = a.head;
	let FP = a.head;
	while (SP && SP.next) {
		SP = SP.next;
		FP = FP.next.next;
		if (SP.value === FP.value) {
			SP = a.head;
			while (SP.value !== FP.value) {
				SP = SP.next;
				FP = FP.next;
				if (SP.value === FP.value) {
					return "first node is " + SP.value;
				}
			}
			break;
		}
	}
};

console.log(loopDetection());
