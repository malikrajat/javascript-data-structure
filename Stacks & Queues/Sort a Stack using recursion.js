// Sort a Stack using recursion

function Stack() {
	var items = [];
	var top = 0;
	//other methods go here

	//Push an item in the Stack
	this.push = function (element) {
		items[top++] = element;
	};
	//top++, first performs the operation then increment's the value

	//Pop an item from the Stack
	this.pop = function () {
		return items[--top];
	};
	//--top, first decrements the value then performs the operation

	//Peek top item from the Stack
	this.peek = function () {
		return items[top - 1];
	};

	//Is Stack empty
	this.isEmpty = function () {
		return top === 0;
	};

	//Clear the Stack
	this.clear = function () {
		top = 0;
	};

	//Size of the Stack
	this.size = function () {
		return top;
	};
	this.lastValue = function () {
		return items[this.size() - 1];
	};
}
/*
//First function to reverse the stack
let reverseStack = (stack) => {
	//If stack has value then call it revcursively
	if (!stack.isEmpty()) {
		let temp = stack.pop();
		reverseStack(stack);

		//Pass the element to second function to add it at top
		insertAtBottom(temp, stack);
	}
};
//Second function to add the items at the bottom
let insertAtBottom = (temp, stack) => {
	// console.log(temp, stack);
	// If stack is empty then add the item
	if (stack.isEmpty()) {
		stack.push(temp);
	} else {
		//Else call the same function recursively
		let x = stack.pop();
		insertAtBottom(temp, stack);
		stack.push(x);
	}
};
*/
let stack = new Stack();
stack.push(61);
stack.push(28);
stack.push(93);
stack.push(48);
stack.push(5);

function sortStack(stack) {
	if (!stack.isEmpty()) {
		let element = stack.pop();
		sortStack(stack);
		sortInsert(stack, element);
	}
}

function sortInsert(stack, element) {
	if (stack.isEmpty()) {
		stack.push(element);
	} else {
		let popElement = stack.lastValue();
		if (element > popElement) {
			stack.push(element);
		} else {
			let b = stack.pop();
			sortInsert(stack, element);
			stack.push(b);
		}
	}
}

sortStack(stack);
for (let index = 0; index < 5; index++) {
	console.log(stack.pop());
}
