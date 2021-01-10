// const stackIns = require("./Stack");
// const stack = new stackIns();
// stack.push("a");
// stack.push("p");
// stack.push("p");
// stack.push("l");
// stack.push("e");

// // ReverseStack.prototype = stack.prototype;
// // ReverseStack.contractor = ReverseStack;
// function ReverseStack(stack) {
// 	// stackIns(this);

// 	//If stack has value then call it revcursively
// 	if (stack.size() >= 0) {
// 		let temp = stack.pop();
// 		ReverseStack(stack);

// 		//Pass the element to second function to add it at top
// 		insertAtBottom(temp, stack);
// 	}
// }
// //Second function to add the items at the bottom
// function insertAtBottom(temp, stack) {
// 	//If stack is empty then add the item
// 	if (stack.size()) {
// 		stack.push(temp);
// 	} else {
// 		//Else call the same function recursively
// 		let x = stack.pop();
// 		insertAtBottom(temp, stack);
// 		stack.push(x);
// 	}
// }

// ReverseStack(stack);
// while (stack.size() >= 0) {
// 	console.log(stack.pop());
// }

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
}

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
	//If stack is empty then add the item
	if (stack.isEmpty()) {
		stack.push(temp);
	} else {
		//Else call the same function recursively
		let x = stack.pop();
		insertAtBottom(temp, stack);
		stack.push(x);
	}
};

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

reverseStack(stack); //call the function

//Print the stack
while (!stack.isEmpty()) {
	console.log(stack.pop());
}
