// Reverse Linked List
//   Go to Discuss
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 *
 */

 var reverseList = function (head) {
    if(head === null) {
        return null;
    }

    return reverse(head)
 }

 function reverse(node) {
    let newHead;
    let n = null;

    while(node !== null) {
        newHead = new ListNode(node.val);
        newHead.next = n;
        n = newHead;
        node = newHead.next
    }

    return newHead;
 }