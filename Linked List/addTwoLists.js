// Add Two Numbers
//   Go to Discuss
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function Node(val) {
    this.val = val;
    this.next = null;
  }
  
  var  addTwoLists = function(first,second) {
    let res = null;
    let temp, prev = null;
    let carry = 0;
    let sum;
  
    while(first !== null || second !== null) {
      sum = carry + (first?first.val : 0) + (second?second.val : 0)
  
      carry = (sum >= 10) ? 1 : 0 //decide the carry
  
      sum = sum % 10 //take unit place digit from sum
      temp = new Node(sum); //create a new node for creating sum
      if(res === null) { //mark the head node for resultan linkedlist
        res = temp;
      } else {
        prev.next = temp; // connect the current node with the rest of the list
        prev = temp; //mark current node as previous
      }
  
      if(first) first = first.next; //move forward if not null
      if(second) second = second.next;
  
      
    }
    if(carry > 0){ //save the carry in a new node
        temp.next = new Node(carry)
      }
      return res //return the head node of the resultan linkedlist
  }
  
 