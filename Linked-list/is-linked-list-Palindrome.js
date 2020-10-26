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
a.addToHeader(1);
a.addToHeader(1);
a.addToHeader(1);

const isLinkedListPalindrome = () => {
	let SP = a.head;
	let FP = a.head;
	while (FP && FP.next) {
		SP = SP.next;
		FP = FP.next.next;
	}
	// 	console.log(FP);
	// console.log(SP.next.value);
	let firstEndListEnd = SP;
	if (FP !== null) {
		firstEndListEnd = SP.next;
	}
	let secondList = SP.prev;
	firstEndListEnd.prev = null;
	secondList.next = null;
	// 	console.log(firstEndListEnd);
	// 	console.log(secondList);
	let result = true;
	while (firstEndListEnd) {
		if (firstEndListEnd.value != secondList.value) {
			result = false;
			break;
		}
		firstEndListEnd = firstEndListEnd.next;
		secondList = secondList.prev;
	}
	return result;
};
console.log(isLinkedListPalindrome());
