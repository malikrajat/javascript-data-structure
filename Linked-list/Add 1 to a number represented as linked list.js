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

a.addToHeader(9);
// a.addToHeader(9);
// a.addToHeader(25);
// a.addToHeader(26);
// a.addToHeader(27);
// a.addToHeader(28);
// a.addToHeader(29);
// a.addToHeader(30);

function AddOne(list) {
	// if (list.next === null) return list;
	while (list.next !== null) {
		list = list.next;
	}
	let passRemainder = 0;
	while (list.prev !== null) {
		let res = null;
		if (passRemainder !== 0) {
			res = list.value + passRemainder + 1;
		} else {
			res = list.value + 1;
		}
		list.value = res % 10;
		passRemainder = res / 10;
		list = list.prev;
	}
	if (list.prev === null) {
		let res;
		res = list.value + passRemainder + 1;
		list.value = res % 10;
		passRemainder = res / 10;
		if (passRemainder !== 0) {
			a.addToHeader(passRemainder);
		}
	}

	return list;
}
console.log(
	"🚀 ~ file: Add 1 to a number represented as linked list.js ~ line 36 ~ AddOne(a.head)",
	AddOne(a.head)
);
