// Binary Search Tree
// Def: Each node can have at most 2 children
// Stores data that can be compare (Strings, numbers)
// Every node to the left of the a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent

// Terminology:
// Root: The top node in a tree
// Child: A node directly connected to another node wehn moving away from the root
// Parent: The converse notion of a child
// Sibling: A group of nodes with the same parent
// Leaf:  A node with no children
// Edge: The connection between one node and another

// Major uses
// HTML Dom
// JSON
// Networking
// AI

// Kinds of trees
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let currentNode = this.root;
		let check = true;
		while (check) {
			// If the
			if (newNode.value > currentNode.value) {
				if (currentNode.right) {
					currentNode = currentNode.right;
				} else if (!currentNode.right) {
					currentNode.right = newNode;
					check = false;
				}
			} else if (newNode.value < currentNode.value) {
				if (currentNode.left) {
					currentNode = currentNode.left;
				} else if (!currentNode.left) {
					currentNode.left = newNode;
					check = false;
				}
			}
		}
	}
}
