// Move Zeroes
// Go to Discuss
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

 
function move (arr) {

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i,1);
            arr.push(0);
        }
    }

}