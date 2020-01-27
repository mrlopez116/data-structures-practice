// Doubly Linked List

// BIG - O
// Insertion - O(1); You only add in the begining or end
// Removal - O(1); Only remove in beginning or end
// Searching - O(N); Have to go thorugh all list to find the node
// Access - O(N); Have to go through all list
// ***Technicallly searching is O(N/2) but that's still O(N)

// Differences between Singly linked list
// - Takes up more memory becuase of prev
// - Better at finding nodes, can be done in half the time;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let popppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let secondToLast = this.tail.prev;
            this.tail = secondToLast;
            this.tail.next = null;
        }
        this.length--;
        return popppedNode;
    }
    // Removes node the beginning of the list
    shift() {
        // Check if there are any nodes in list
        if (!this.head) return undefined;
        // Store the head to be returned later
        let poppedHead = this.head;
        // If there is only one node in the list set we now have an empty list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedHead.next;
            this.head.prev = null;
            poppedHead.next = null;
        }
        this.length--;
        return poppedNode;

    }

    unshift(val) {
        let newNdoe = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length || this.length === 0) return null;
        let count, currentNode;
        if (index / 2 >= index) {
            currentNode = this.head;
            count = 0;
            while (count !== index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        } else {
            currentNode = this.tail;
            count = this.length - 1;
            while (count !== index) {
                currentNode = currentNode.prev;
                count--;
            }
            return currentNode;
        }
    }

    set(val, index) {
        let nodeToChange = this.get(index);
        if (nodeToChange) {
            nodeToChange.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if (index < 0 || index >= this.length || this.length === 0) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length - 1) return !!this.push(val); // makes the return a boolean value;

        let newNode = new Node(val);
        let nodeBefore = this.get(index - 1);
        let nodeAfter = nodeBefore.next;

        nodeAfter.prev = newNode, newNode.next = nodeAfter;
        nodeBefore.next = newNode, newNode.prev = nodeBefore;
        this.length++;
        return true;
    }
    
    remove(index) {
        if (index < 0 || index >= this.length || this.length === 0) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop(); 

        let nodeBefore = this.get(index-1);
        let nodeToRemove = nodeBefore.next;
        let nodeAfter = nodeToRemove.next;
        nodeBefore.next = nodeAfter;
        nodeAfter.prev = nodeBefore;
        nodeToRemove.prev = null, nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }

    reverse(){
        let currentNode = this.head; // Setting the current Node
        let nextNode = null; // We need a variable we will use later to store the nextNode, this will be constantly updating
        this.head = this.tail // Set the original tail as the new head
        this.tail = currentNode; // Set old original tail to the new head which at this  point is the currentNode
        //this.tail.next = null; // Make sure to clear the new tail
        let index = 0; // This will be the counter

        while(index < this.length) {
            // Get the nextNode
            nextNode = currentNode.next;
            // Store the old prev node
            let oldPrev = currentNode.prev;
            // Set the currentNode's previous to the nextNode
            currentNode.prev = nextNode;
            // Set the currentNode's next to the old previous
            currentNode.next = oldPrev;
            // Set the new currentNode to the nextNode for the next itteration
            currentNode = nextNode;
            // Increase the index;
            index++;
        }

        return this;
    }
}