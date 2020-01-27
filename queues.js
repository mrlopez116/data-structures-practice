// Queues:FIFI (First in, first out)

// Queues Big O(N):
// Insertion - O(1); You only add in the begining or end
// Removal - O(1); Only remove in beginning or end
// Searching - O(N); Have to go thorugh all list to find the node
// Access - O(N); Have to go through all list

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// Add new node at the end of the queue
	enqueque(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return newNode.value;
	}

	dequeue() {
		if (!this.first) return null;
		if (this.first === this.last) {
			this.last = null;
		}
		let nodeToReturn = this.first;
		this.first = this.fist.next;
		this.size--;
		return nodeToReturn.value;
	}
}
