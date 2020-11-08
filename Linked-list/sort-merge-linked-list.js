function LinkedList() {
	this.head = null;
}
function Node(value, next, prev) {
	this.value = value;
	this.next = next;
}
LinkedList.prototype.addToHeader = function (value) {
	let newNode = new Node(value, this.head, null);
	this.head = newNode;
};

let a = new LinkedList();
a.addToHeader(1);
a.addToHeader(2);
a.addToHeader(3);
a.addToHeader(4);
a.addToHeader(5);

function sortedMerge(a, b) {
	let result = null;
	if (a === null || b === null) {
		return a === null ? b : a;
	}
	//Recursively merge the list by calling the same function with appropriate next value
	if (a.value <= b.value) {
		result = a;
		result.next = sortedMerge(a.next, b);
	} else {
		result = b;
		result.next = sortedMerge(a, b.next);
	}
	return result;
}
function sortMergeLinkedList(list) {
	if (list === null || list.next === null) return list;
	let SP = list;
	let FP = list;
	let prev = SP;
	while (FP && FP.next) {
		prev = SP;
		SP = SP.next;
		FP = FP.next.next;
	}
	prev.next = null;
	let h1 = sortMergeLinkedList(list);
	let h2 = sortMergeLinkedList(SP);
	return sortedMerge(h1, h2);
}
console.log(sortMergeLinkedList(a.head));
