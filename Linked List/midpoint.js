class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(values = []) {
        this.head = null;

        for (let value of values) {
            this.insertLast(value);
        }
    }

    clear() {
        this.head = null;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let counter = 1;
        let previous = this.head;
        let node = this.head.next;
        while (node) {
            if (counter === index) {
                previous.next = new Node(data, node);
                return;
            }
            previous = node;
            node = node.next;
            counter++;
        }

        previous.next = new Node(data, node);
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index - 1) {
                if (node.next) {
                    return (node.next = node.next.next);
                } else {
                    return (node.next = null);
                }
            }
            node = node.next;
            counter++;
        }
    }

    getFirst() {
        return this.head;
    }

    insertFirst(data) {
        this.head = new Node(data, this.getFirst());
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        return node;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
            return last.next;
        } else {
            this.head = new Node(data);
            return this.head;
        }
    }

    forEach(fn) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

// -----------------------------------


// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }



function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    return slow;

}

module.exports = midpoint;

// ---------------------------------------
const midpoint = require('./index');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('Midpoint is a function', () => {
    expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
    test('when the list has 3 elements', () => {
        const l = new LinkedList();
        l.insertLast('a');
        l.insertLast('b');
        l.insertLast('c');
        expect(midpoint(l).data).toEqual('b');
    });

    test('when the list has 5 elements', () => {
        const l = new LinkedList();
        l.insertLast('a');
        l.insertLast('b');
        l.insertLast('c');
        l.insertLast('d');
        l.insertLast('e');
        expect(midpoint(l).data).toEqual('c');
    });
});

describe('Midpoint returns the middle node of an even numbered list', () => {
    test('when the list has 2 elements', () => {
        const l = new LinkedList();
        l.insertLast('a');
        l.insertLast('b');
        expect(midpoint(l).data).toEqual('a');
    });

    test('when the list has 4 elements', () => {
        const l = new LinkedList();
        l.insertLast('a');
        l.insertLast('b');
        l.insertLast('c');
        l.insertLast('d');
        expect(midpoint(l).data).toEqual('b');
    });
});
