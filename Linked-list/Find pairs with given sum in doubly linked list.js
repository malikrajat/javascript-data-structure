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
a.addToHeader(51);
a.addToHeader(42);
a.addToHeader(33);
a.addToHeader(48);
a.addToHeader(61);
a.addToHeader(69);
a.addToHeader(27);

// sort linked list if it not sorted
//Main function
function sortLinkedList(head) {
	let result = null;
	let current = head;
	let next;
	//Iterate the loop
	while (current !== null) {
		next = current.next;

		//Sort the linked list till the current element and store it
		result = sortedInsert(result, current);
		current = next;
	}
	//Return the sorted list
	// return result;
	findSum(result);
}
function findSum(list) {
	console.log(list);
}
//Function to sort the list
function sortedInsert(sorted, newNode) {
	//Temporary node to swap the elements
	let temp = new Node(null, null, null);
	let current = temp;
	temp.next = sorted;

	//Sort the list based on the specified order
	while (current.next !== null && current.next.value < newNode.value) {
		current = current.next;
	}
	//Swap the elements
	newNode.next = current.next;
	current.next = newNode;
	//Return the sorted list.
	return temp.next;
}

sortLinkedList(a.head);
