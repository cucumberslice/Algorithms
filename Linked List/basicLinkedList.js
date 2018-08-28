// define a node class and a linkedList class

class Node{
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    // add a new node in the list
    insertFirst(val) {
        this.head = new Node(val, this.head)
    }

    //find the number of nodes in the list
    size() {

        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    //get the first node

    getFirst() {
        return this.head;
    }

    //get the last node

    getLast() {

        let node = this.head;

        while(node) {

            if(node.next === null) {
                return node;
            }

            node = node.next;
        }
    }

    //empty out the node
    clear() {
        this.head = null;
    }
}