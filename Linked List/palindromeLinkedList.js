// Palindrome Linked List
//   Go to Discuss
// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 *@param {ListNode} head
 * @return {boolean}
 */

 var palindrome = function(head) {
     
    if(head === null) {
        return true;
    }

    var stack = [];
    var temp = head;

    while(head !== null) {
        stack.push(head.val);
        head = head.next;
    }

    while(temp !== null) {
        
        if(temp.val !== stack.pop()) {
            return false
        }

        temp = temp.next;
    }

    return true;

 }