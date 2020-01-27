// Singly Linked Lists
// Singly - each node is connect ONE directionly to the nexxt node

// Lists:
// - Do not hace indicies
// - Conencted via nodes with a NEXT pointer
// - Random access is not allowed (You cannot asked for a specific number)
// - insertion and deletion is very quick because there are no indexes


// NODE
// - piece of data - val

// BIG - O
// Insertion - O(1); You only add in the begining or end
// Removal - O(1); Only remove in beginning or end
// Searching - O(N); Have to go thorugh all list to find the node
// Access - O(N); Have to go through all list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let currentNode = this.head;
        let previousNode = this.head;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    // Removes node from the beginnng of the list.
    shift() {
        if (this.head) {
            let firstNode = this.head;
            this.head = firstNode.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return firstNode;
        }
        return undefined;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return null;
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
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
        if (index > this.length || index < 0) return false;
        if (index === this.length) this.push(val);
        if (index === 0) this.unshift(val);
        let newNode = new Node(val);
        let previous = this.get(index - 1);
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;
        return true;

    }

    remove(index) {
        if (index >= this.length || index < 0) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let previousNode = this.get(index - 1);
        let nodeBeingRemoved = previousNode.next;
        previousNode.next = nodeBeingRemoved.next;
        this.length--;
        return nodeBeingRemoved;
    }

    reverse() {
        let currentNode = this.head; // Always starts at the head.
        let nextNode = null; // Keeps track of the `currentNode's` .next to continue going through linked list
        let previousNode = null; // Keeps track of the previous node while will be the `currentNode` new `.next`
        let counter = 0; // Keeps track on the node we are on
        this.head = this.tail;
        this.tail = currentNode;
        // Mario's solution after seeing Colt's solution
        while (counter < this.length) {

            // We will need a placeholder to store the nextNode in the list
            nextNode = currentNode.next;
            // This is where the switch happens; we assign the the node that comes before the currentNode to now be the new `.next`
            currentNode.next = previousNode;
            // Assign a new `previousNode` which will be the `currentNode`
            previousNode = currentNode;
            // The new currentNode will be the `nextNode` we stored earlier;
            currentNode = nextNode;

        }
        return this;

        // ------COLT"S SOLUTION-----------
        // for(let i = 0; i < this.length; i++) {
        //     nextNode = currentNode.next;
        //     currentNode.next = previousNode;
        //     previousNode = currentNode;
        //     currentNode = nextNode;
        // 

        //------Mario's first nolook solution------
        // while(counter < this.length){
        //     // if the counter is at the begining..
        //     if(counter === 0) {
        //         // Make the currentNode the new tail;
        //         this.tail = currentNode;
        //         // Assign the previous node to the current node, to reference for the new `currentNode's` .next
        //         previousNode = currentNode;
        //         // Move onto the next node
        //         currentNode = currentNode.next;
        //     } else { // If the loop is not at the beginning
        //         // We will need a placeholder to store the nextNode in the list
        //         nextNode = currentNode.next;
        //         // This is where the switch happens; we assign the the node that comes before the currentNode to now be the new `.next`
        //         currentNode.next = previousNode;
        //         // Assign a new `previousNode` which will be the `currentNode`
        //         previousNode = currentNode;
        //         // The new currentNode will be the `nextNode` we stored earlier;
        //         currentNode = nextNode;
        //     }
        //     // Assign the new head which would be the previous node because by now we have moved onto the `nextNode` into the `currentNode`, which in this case would be null
        //     if(counter === this.length - 1) {
        //         this.head = previousNode;
        //     }
        //     counter++;
        // }

    }

}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList{

}