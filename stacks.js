// Stacks: LIFO Last in First Out (Think stack of plates. The last thing add, is the first things out)
// Uses: Manage function invocations, Undo/Redo, Routing (The history object) is treated like a stack,

// Stacks Big O(N):
// Insertion - O(1); You only add in the begining or end
// Removal - O(1); Only remove in beginning or end
// Searching - O(N); Have to go thorugh all list to find the node
// Access - O(N); Have to go through all list

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// Removes node from the beginnng of the list.
	pop() {
		if (this.first) {
			let firstNode = this.first;
			this.first = firstNode.next;
			this.size--;
			if (this.size === 0) {
				this.last = null;
			}
			return firstNode;
		}
		return undefined;
	}

	psuh(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
		return this;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
