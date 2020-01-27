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

// Big O
// Insertion - O(log n)
// Serching - O(log n)

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
		// While loop to traverse through the tree
		while (true) {
			// If there is already a value present in the tree return undefined
			if (currentNode.value === val) return undefined;
			// CHeck if the `newNode` is greater
			if (newNode.value > currentNode.value) {
				// If the `newNode` is greater check if the `currentNode.right` is present
				if (currentNode.right) {
					// If there is a `currentNode.right` set that as the new `currentNode`
					currentNode = currentNode.right;
				} else {
					// If there is not a `currentNode.right` set it the `newNode`
					currentNode.right = newNode;
					return this;
				}
			} else if (newNode.value < currentNode.value) {
				// If the `newNode` is less check if the `currentNode.left` is present
				if (currentNode.left) {
					// If there is a `currentNode.left` set that as the new `currentNode`
					currentNode = currentNode.left;
				} else {
					// If there is not a `currentNode.right` set it the `newNode
					currentNode.left = newNode;
					return this;
				}
			}
		}
	}

	find(val) {
		if (!this.root) return undefined;
		let currentNode = this.root;
		// While loop to traverse through the tree
		while (true) {
			// Run checks to see if we have found the value
			if (val === currentNode.value) {
				return currentNode;
			} else if (val > currentNode.value && currentNode.left) {
				currentNode = currentNode.left;
			} else if (val < currentNode.value && currentNode.right) {
				currentNode = currentNode.right;
			} else {
				// return null if we do not find the value.
				return null;
			}
		}
	}
}
