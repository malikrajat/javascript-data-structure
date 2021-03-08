class Node {
	constructor(value = 0) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BST {
	constructor() {
		// Initialize a root element to null.
		this.root = null;
	}
	insert(data) {
		// const node = new Node(node);
		// // check for tree to be empty before
		// if (this.root === null) {
		// 	// insert first child
		// 	this.root = node;
		// 	return;
		// }
		// const check = (node) => {
		// 	if (node.value === value) {
		// 		return;
		// 	}
		// 	if (node.value > value) {
		// 		check((node.left = node.left || new Node(node)));
		// 		return;
		// 	}
		// 	if (node.value < value) {
		// 		check((node.right = node.right || new Node(node)));
		// 	}
		// };
		// check((this.root = this.root || new Node(value)));
		// .............................
		// Creating a node and initailising
		// with data
		var newNode = new Node(data);

		// root is null then node will
		// be added to the tree and made root.
		if (this.root === null) this.root = newNode;
		// find the correct position in the
		// tree and add the node
		else this.insertNode(this.root, newNode);
	}
	// Method to insert a node in a tree
	// it moves over the tree to find the location
	// to insert a node with a given data
	insertNode(node, newNode) {
		// if the data is less than the node
		// data move left of the tree
		if (newNode.data < node.data) {
			// if left is null insert node here
			if (node.left === null) node.left = newNode;
			// if left is not null recur until
			// null is found
			else this.insertNode(node.left, newNode);
		}

		// if the data is more than the node
		// data move right of the tree
		else {
			// if right is null insert node here
			if (node.right === null) node.right = newNode;
			// if right is not null recur until
			// null is found
			else this.insertNode(node.right, newNode);
		}
	}
	// helper method that calls the
	// removeNode with a given data
	remove(data) {
		// root is re-initialized with
		// root of a modified tree.
		this.root = this.removeNode(this.root, data);
	}
	// Method to remove node with a
	// given data
	// it recur over the tree to find the
	// data and removes it
	removeNode(node, key) {
		// if the root is null then tree is
		// empty
		if (node === null) return null;
		// if data to be delete is less than
		// roots data then move to left subtree
		else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		}

		// if data to be delete is greater than
		// roots data then move to right subtree
		else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		}

		// if data is similar to the root's data
		// then delete this node
		else {
			// deleting node with no children
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// deleting node with one children
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			// Deleting node with two children
			// minumum node of the rigt subtree
			// is stored in aux
			var aux = this.findMinNode(node.right);
			node.data = aux.data;

			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}
	// Performs inorder traversal of a tree
	inorder(node) {
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	// Performs postorder traversal of a tree
	postorder(node) {
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}
	// finds the minimum node in tree
	// searching starts from given node
	findMinNode(node) {
		// if left of a node is null
		// then it must be minimum node
		if (node.left === null) return node;
		else return this.findMinNode(node.left);
	}
	// finds the minimum node in tree
	// searching starts from given node
	findMaxNode(node) {
		// if left of a node is null
		// then it must be minimum node
		if (node.right === null) return node;
		else return this.findMinNode(node.right);
	}
	// returns root of the tree
	getRootNode() {
		return this.root;
	}
	// search for a node with given data
	search(node, data) {
		// if trees is empty return null
		if (node === null) return null;
		// if data is less than node's data
		// move left
		else if (data < node.data) return this.search(node.left, data);
		// if data is less than node's data
		// move left
		else if (data > node.data) return this.search(node.right, data);
		// if data is equal to the node data
		// return node
		else return node;
	}
}

let a = new BST();
a.insert(1);
a.insert(12);
a.insert(8);
a.insert(5);
a.insert(21);
a.insert(9);
a.insert(31);
a.insert(10);
a.insert(13);
var root = a.getRootNode();
console.log(a.findMaxNode(root));
// console.log(a.findMinNode(root));
// console.log(a.findMinNode());
